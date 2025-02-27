const spotifyCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const spotifyScopes = ["user-read-playback-state", "user-read-currently-playing"];
const spotifyRedirectUri = `${window.location.origin}${window.location.pathname}`;

const delay = ms => new Promise(res => setTimeout(res, ms));

function getRandomString(length) {
	let rand = [];

	for(let i = 0; i < length; i++) {
		let char = spotifyCharacters.charAt(Math.floor(Math.random() * spotifyCharacters.length));
		rand.push(char);
	}

	return rand.join("");
}

async function generateCodeChallenge(codeVerifier) {
	let out;

	if(typeof window.crypto.subtle === "undefined") {
		let md = forge.md.sha256.create();
		md.update(codeVerifier);
		out = btoa(md.digest().data);
	} else {
		const encoder = new TextEncoder();
		const data = encoder.encode(codeVerifier);
		const digest = await window.crypto.subtle.digest('SHA-256', data);
		out = btoa(String.fromCharCode.apply(null, new Uint8Array(digest)));
	}

	return out.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

var spotifyCodeVerifier = getRandomString(128);

const spotifyParams = new URLSearchParams(window.location.search);
const spotifyCode = spotifyParams.get('code');

function regenCodes() {
	let spotifyClientID = localStorage.getItem("setting_spotifyClientID");

	if(!spotifyClientID) {
		console.log("Please set your Spotify App Client ID in the overlay settings panel.");
		return;
	}

	let refreshToken = localStorage.getItem("spotify_refreshToken");

	if(refreshToken) {
		let body = new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken,
			client_id: spotifyClientID
		});

		const response = fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: body
		}).then(response => {
			if(!response.ok) {
				throw new Error('HTTP status ' + response.status);
				localStorage.removeItem("spotify_refreshToken");
				regenCodes();
			}

			return response.json();
		}).then(data => {
			localStorage.setItem('spotify_accessToken', data.access_token);
			localStorage.setItem('spotify_refreshToken', data.refresh_token);
			onSpotifyReady();
		}).catch(error => {
			console.error('Error:', error);
			localStorage.removeItem("spotify_refreshToken");
		});
	} else {
		generateCodeChallenge(spotifyCodeVerifier).then(codeChallenge => {
			let state = getRandomString(16);

			localStorage.setItem('spotify_codeVerifier', spotifyCodeVerifier);

			let args = new URLSearchParams({
				response_type: 'code',
				client_id: spotifyClientID,
				scope: spotifyScopes.join(" "),
				redirect_uri: spotifyRedirectUri,
				state: state,
				code_challenge_method: 'S256',
				code_challenge: codeChallenge
			});

			window.location = 'https://accounts.spotify.com/authorize?' + args;
		});
	}
}

if(spotifyCode) {
	let codeVerifier = localStorage.getItem('spotify_codeVerifier');
	let spotifyClientID = localStorage.getItem("setting_spotifyClientID");

	let body = new URLSearchParams({
		grant_type: 'authorization_code',
		code: spotifyCode,
		redirect_uri: spotifyRedirectUri,
		client_id: spotifyClientID,
		code_verifier: codeVerifier
	});

	const response = fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: body
	}).then(response => {
		if(!response.ok) {
			throw new Error('HTTP status ' + response.status);
			regenCodes();
		}

		return response.json();
	}).then(data => {
		localStorage.setItem('spotify_accessToken', data.access_token);
		localStorage.setItem('spotify_refreshToken', data.refresh_token);
		onSpotifyReady();
	}).catch(error => {
		console.error('Error:', error);
	});
}

async function getState() {
	let accessToken = localStorage.getItem("spotify_accessToken");

	const response = await fetch("https://api.spotify.com/v1/me/player", {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	
	if(!response.ok) {
		regenCodes();
	}

	const data = await response.json();
	return data;
}

var updateTrackTO;
var currentSong;
var lastUpdateDelay = -1;

const spotifyEventChannel = new BroadcastChannel("spotify");
function postToSpotifyEventChannel(data) {
	console.log(data);
	if(data) {
		spotifyEventChannel.postMessage(data);
	}
}

async function updateTrack() {
	const defaultUpdateDelay = parseFloat(localStorage.getItem("setting_spotify_refreshInterval")) * 1000;

	getState().then(async function(response) {
		if(response.item !== null) {
			currentSong = response.item;

			let artists = [];
			for(let i in response.item.artists) {
				let artistItem = response.item.artists[i];
				artists.push(artistItem.name);
			}

			let art = response.item.album.images[Math.ceil(response.item.album.images.length / 2) - 1].url;
			let swatches = await Vibrant.from(art).getSwatches();
			let colors = {
				light: [],
				dark: []
			};
			const checks = {
				light: ["LightVibrant", "Vibrant", "LightMuted", "Muted"],
				dark: ["DarkVibrant", "DarkMuted", "Muted", "Vibrant"]
			};

			for(let shade in checks) {
				for(let i in checks[shade]) {
					let check = checks[shade][i];
					if(check in swatches) {
						if(swatches[check] !== null) {
							colors[shade].push(swatches[check].getRgb());
						}
					}
				}
			}
			let darkColor = colors.dark[0].map(function(x) { return Math.floor(x).toString(16).padStart(2, "0"); }).join("");
			let lightColor = colors.light[0].map(function(x) { return Math.floor(x).toString(16).padStart(2, "0"); }).join("");

			// ignore response.item.album.album_type, spotify will always fill this in with "single"
			postToSpotifyEventChannel({event: "trackData", data: {
				title: response.item.name,
				artists: artists,
				album: {
					name: response.item.album.name,
					type: (response.item.album.total_tracks > 2 ? "album" : "single")
				},
				art: art,
				colors: {
					dark: `#${darkColor}`,
					light: `#${lightColor}`
				},
				scannable: {
					black: `https://scannables.scdn.co/uri/plain/jpeg/${lightColor}/black/640/${response.item.uri}`,
					white: `https://scannables.scdn.co/uri/plain/jpeg/${darkColor}/white/640/${response.item.uri}`
				},
				uri: response.item.uri,
				elapsed: response.progress_ms,
				duration: response.item.duration_ms,
				isPlaying: response.is_playing
			}});

			const delay = 100 + (response.item.duration_ms - response.progress_ms);

			if(response.item.duration_ms - response.progress_ms < defaultUpdateDelay && delay !== lastUpdateDelay) {
				console.log(`triggering early state fetching (${delay}ms remains)`);
				clearTimeout(updateTrackTO);
				updateTrackTO = setTimeout(updateTrack, delay);
			} else {
				console.log(`not triggering early state fetching (${delay}ms remains)`);
				clearTimeout(updateTrackTO);
				updateTrackTO = setTimeout(updateTrack, defaultUpdateDelay);
			}

			lastUpdateDelay = delay;
		} else {
			clearTimeout(updateTrackTO);
			updateTrackTO = setTimeout(updateTrack, defaultUpdateDelay);
		}
	}).catch(async function() {
		console.log("error thrown, retriggering");
		await delay(15000);
		if(localStorage.getItem('spotify_accessToken')) {
			updateTrack();
		}
	});
}

if(localStorage.getItem('spotify_refreshToken')) {
	regenCodes();
}

$("#connectSpotifyButton").on("mouseup", function(e) {
	e.preventDefault();
	regenCodes();
});

var isSpotifyReady = false;
function onSpotifyReady() {
	if(spotifyCode) {
		window.location = spotifyRedirectUri;
	}

	isSpotifyReady = true;

	addNotification("Successfully connected to Spotify", {bgColor: "var(--notif-color-success)", duration: 5});
	changeStatusCircle("SpotifyStatus", "green", `connected`);
}