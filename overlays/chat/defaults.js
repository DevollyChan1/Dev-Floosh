const defaultConfig = {
	"enableBTTVGlobalEmotes": "true",
	"enableFFZBadges": "true",
	"chatMessageFont": "Manrope",
	"chatMaxBigEmotes": "10",
	"chatShadows": "true",
	"enable7TVBadges": "true",
	"chatAnimations": "true",
	"chatHighlightBackgroundColor": "#ffffff",
	"chatFadeHistory": "true",
	"chatAnimationsInDuration": "0.5",
	"chatAnimationsOutDuration": "0.5",
	"chatOutlineStyle": "solid",
	"chatFadeHistoryStep": "7",
	"chatOutlinesSize": "1",
	"enableFFZGlobalEmotes": "true",
	"enableFFZ": "true",
	"chatBackgroundColor": "#000000",
	"chatHighlightBackgroundColorAlpha": "0.25",
	"chatMessageColor": "#ffffff",
	"enable7TVChannelEmotes": "true",
	"chatDefaultNameColor": "#aaaaaa",
	"chatMessageFontWeight": "700",
	"enable7TVGlobalEmotes": "true",
	"chatRemoveMessageDelay": "45",
	"enableBTTV": "true",
	"chatBackgroundColorAlpha": "0",
	"enableBTTVBadges": "true",
	"twitchClientSecret": "",
	"chatParseMarkdown": "true",
	"chatDefaultNameColorAlpha": "1",
	"chatHideAccounts": "",
	"twitchChannel": "",
	"chatOutlinesColor": "#ffffff",
	"chatMessageFontSize": "16",
	"chatOutlinesFilter": "true",
	"twitchClientID": "",
	"chatNameFontWeight": "900",
	"enable7TV": "true",
	"chatHideCommands": "true",
	"chatCommandCharacter": "!",
	"chatBigEmoteSize": "48",
	"chatMessageColorAlpha": "1",
	"enable7TVUserPaints": "true",
	"chatNameFontSize": "16",
	"chatBlockBorderRadius": "0",
	"chatShowBigEmotes": "true",
	"chatBlockPadding": "18",
	"enableFFZChannelEmotes": "true",
	"chatOutlines": "false",
	"enableBTTVChannelEmotes": "true",
	"chatOutlinesColorAlpha": "1",
	"chatNameFont": "Manrope",
	"chatBlockIndividualPadding": "0",
	"debugRawMessages": "false",
	"chatCornerAlignment": "bottom,left",
	"chatMessageLineHeight": "28",
	"enableAvatars": "true",
	"avatarAllowedModerators": "true",
	"avatarAllowedVIPs": "true",
	"avatarAllowedSubscribers": "true",
	"avatarAllowedTurbo": "true",
	"avatarAllowedPrime": "false",
	"avatarAllowedArtist": "true",
	"avatarAllowedPartner": "false",
	"avatarAllowedStaff": "false",
	"avatarAllowedEveryone": "false",
	"enablePronouns": "true",
	"avatarSize": "34",
	"avatarShape": "squircle",
	"chatDefaultNameColorForced": "false",
	"chatMessageUserInfoElementSpacing": "14",
	"chatAnimationInName": "slideInBottom_BlurKF",
	"chatAnimationOutName": "slideOutBottom_BlurKF",
	"overlayShadowColor": "#000000",
	"overlayShadowColorAlpha": "1",
	"overlayShadowXOffset": "0",
	"overlayShadowYOffset": "1",
	"overlayShadowBlurRadius": "2",
	"overlayOutlineColor": "#000000",
	"overlayOutlineColorAlpha": "0.45",
	"overlayOutlineSize": "1"
};

for(let setting in defaultConfig) {
	if(!localStorage.getItem(`setting_${setting}`)) {
		console.log(`saving default value for setting ${setting}`);
		localStorage.setItem(`setting_${setting}`, defaultConfig[setting]);
	} else {
		if(setting.indexOf("FFZ") === -1 && setting.indexOf("7TV") === -1 && setting.indexOf("BTTV") === -1)
		updateSetting(`setting_${setting}`, localStorage.getItem(`setting_${setting}`));
	}
}