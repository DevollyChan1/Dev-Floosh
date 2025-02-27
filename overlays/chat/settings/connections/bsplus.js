const bsplusEventChannel = new BroadcastChannel("bsplus");
function postToBSPlusEventChannel(data) {
	console.log(data);
	if(data) {
		bsplusEventChannel.postMessage(data);
	}
}

// todo: merge these postTo functions into one and pass the wanted event channel object reference in as an argument

var bsplusInit = false;
var bsplus_ws;
function startBSPlusWebsocket() {
	if(bsplusInit) {
		return;
	}

	bsplusInit = true;

	console.log("Starting connection to BS+...");
	let url = `ws://${localStorage.getItem("setting_bsplus_ip")}:${localStorage.getItem("setting_bsplus_port")}/socket`;

	bsplus_ws = new WebSocket(url);
	bsplus_ws.hasSeenFirstMessage = false;

	bsplus_ws.addEventListener("message", function(msg) {
		var data = JSON.parse(msg.data);

		if(!bsplus_ws.hasSeenFirstMessage) {
			bsplus_ws.hasSeenFirstMessage = true;
			console.log(data);
			console.log(`Connected to Beat Saber v${data.gameVersion}`);
			changeStatusCircle("BSPlusStatus", "green", `connected (v${data.gameVersion.split("_")[0]})`);
		}

		if(data._type === "event") {
			postToBSPlusEventChannel(data);
		}
	});

	bsplus_ws.addEventListener("open", function() {
		console.log(`Connected to BS+ websocket at ${url}`);
		changeStatusCircle("BSPlusStatus", "green", "connected");

		addNotification("Connected to Beat Saber Plus", {bgColor: "var(--notif-color-success)", duration: 5});
	});

	bsplus_ws.addEventListener("close", function() {
		bsplusInit = false;

		console.log(`Connection to BS+ websocket ${url} failed, retrying in 20 seconds...`);
		changeStatusCircle("BSPlusStatus", "red", "disconnected");
		setTimeout(startBSPlusWebsocket, 20000);

		addNotification("Disconnected from Beat Saber Plus", {bgColor: "var(--notif-color-fail)", duration: 5});

		delete bsplus_ws;
	});
}