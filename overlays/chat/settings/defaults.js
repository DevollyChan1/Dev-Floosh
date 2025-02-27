const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const nonPublicSettings = [
	"twitchClientID",
	"twitchClientSecret",
	"streamlabsSocketToken",
	"streamelementsJWTToken",
	"spotifyClientID",
	"obs_usePassword",
	"obs_password",
	"chatHideAccounts",
	"twitchChannel",
	"debugRawMessages",
	"debugFreezeChat",
	"ajaxTimeout",
	"obs_ip",
	"obs_port",
	"bsvodaudio_audioSource",
	"bsvodaudio_vodAudioTrack",
	"bsvodaudio_syncRemoteDBs",
	"bsvodaudio_remoteDBURLs",
	"bsplus_ip",
	"bsplus_port",
	"bsvodaudio_muteOnConflict",
	"bsvodaudio_muteOnUnknown",
	"bsvodaudio_muteOnMenu",
	"autoHideAllKnownBots",
	"allowConsoleMessages",
	"useLowQualityImages",
	"chatRemoveMessageDelay",
	"chatRemoveSystemMessageDelay",
	"chatParseMarkdown",
	"enable7TV",
	"enable7TVBadges",
	"enable7TVChannelEmotes",
	"enable7TVGlobalEmotes",
	"enable7TVUserPaints",
	"enableBTTV",
	"enableBTTVBadges",
	"enableBTTVChannelEmotes",
	"enableBTTVGlobalEmotes",
	"enableFFZ",
	"enableFFZBadges",
	"enableFFZChannelEmotes",
	"enableFFZGlobalEmotes",
	"use3dTransformsOnAnimations",
	"chatMessagesHardCap",
	"chatHideCommands",
	"chatCommandCharacter",
	"avatarAllowedModerators",
	"avatarAllowedVIPs",
	"avatarAllowedSubscribers",
	"avatarAllowedTurbo",
	"avatarAllowedPrime",
	"avatarAllowedArtist",
	"avatarAllowedPartner",
	"avatarAllowedStaff",
	"avatarAllowedEveryone",
	"avatarAllowedIncludeBits",
	"avatarAllowedBitsMinimum",
	"avatarAllowedAffiliates",
	"avatarAllowedIncludeGifts",
	"avatarAllowedGiftsMinimum",
	"avatarAllowedIncludeTotalMessages",
	"avatarAllowedMessageThreshold",
	"applyBorderRadiusToSubBadges",
	"badgeBorderRadius",
	"enableTwitchBadges",
	"enableTwitchRoleBadges",
	"enableTwitchGameBadges",
	"enableTwitchPartnerBadges",
	"enableTwitchBitsBadges",
	"enableTwitchSubGiftsBadges",
	"enableTwitchLeaderboardBadges",
	"enableTwitchFounderBadges",
	"enableTwitchStaffBadges",
	"enableTwitchMomentsBadges",
	"enableTwitchStatusBadges",
	"enableTwitchPredictionsBadges",
	"enableTwitchPrimeGamingBadges",
	"enableTwitchTurboBadges",
	"enableTwitchSubscriberBadges",
	"enableTwitchConBadges",
	"enableTwitchCharityBadges",
	"enableTwitchHypeTrainBadges",
	"enableAffiliateBadges",
	"enableBotBadges",
	"enableEmotes",
	"emotesParseToImage",
	"chatShowCommonEmotes",
	"useNewerEmojiRegex",
	"keepAmountOfBackups",
	"spotify_enableScannable",
	"spotify_enableArt",
	"spotify_enableArtOutline",
	"spotify_refreshInterval",
	"spotify_progressInterval",
	"spotify_enableMarquee",
	"spotify_marqueeDelay",
	"spotify_marqueeGap",
	"spotify_marqueeSpeed",
	"allowModeratorsToRefresh",
	"allowParrotToRefresh",
	"bigNoNoWords",
	"spotify_hideOnPause",
	"cmdEnableBSR",
	"spotify_enableArtistAlbumCycle",
	"spotify_artistAlbumCycleDelay",
	"clock_overrideHeader",
	"clock_overrideHeaderString",
	"clock_use12Hour",
	"enableTwitchEventBadges",
	"enableCustomBadges_subscriber",
	"enableCustomBadges_bits"
];

const defaultConfig = {
	"enableBTTVGlobalEmotes": "true",
	"enableFFZBadges": "true",
	"chatMessageFont": "Manrope",
	"chatMaxBigEmotes": "8",
	"chatShadows": "true",
	"enable7TVBadges": "true",
	"chatHighlightBackgroundColor": "#FFFFCCFF",
	"chatFadeHistory": "true",
	"chatOutlineStyle": "solid",
	"chatFadeHistoryStep": "15",
	"chatOutlinesSize": "1",
	"enableFFZGlobalEmotes": "true",
	"enableFFZ": "true",
	"chatBackgroundColor": "#00000000",
	"chatMessageColor": "#ffffff",
	"enable7TVChannelEmotes": "true",
	"chatDefaultNameColor": "#aaaaaa",
	"chatMessageFontWeight": "700",
	"enable7TVGlobalEmotes": "true",
	"chatRemoveMessageDelay": "45",
	"chatRemoveSystemMessageDelay": "10",
	"enableBTTV": "true",
	"enableBTTVBadges": "true",
	"twitchClientSecret": "",
	"chatParseMarkdown": "true",
	"chatHideAccounts": "",
	"twitchChannel": "",
	"chatOutlinesColor": "#ffffff",
	"chatMessageFontSize": "15",
	"chatOutlinesFilter": "true",
	"twitchClientID": "",
	"chatNameFontWeight": "900",
	"enable7TV": "true",
	"chatHideCommands": "true",
	"chatCommandCharacter": "!",
	"chatBigEmoteSize": "48",
	"enable7TVUserPaints": "true",
	"chatNameFontSize": "16",
	"chatBlockBorderRadius": "0",
	"chatShowBigEmotes": "true",
	"chatBlockPaddingVertical": "16",
	"chatBlockPaddingHorizontal": "16",
	"enableFFZChannelEmotes": "true",
	"chatOutlines": "false",
	"enableBTTVChannelEmotes": "true",
	"chatNameFont": "Manrope",
	"chatBlockIndividualPaddingVertical": "0",
	"chatBlockIndividualPaddingHorizontal": "0",
	"debugRawMessages": "false",
	"chatCornerAlignment": "bottom,left",
	"chatMessageLineHeight": "26",
	"enableAvatars": "true",
	"avatarAllowedModerators": "true",
	"avatarAllowedVIPs": "true",
	"avatarAllowedSubscribers": "true",
	"avatarAllowedTurbo": "true",
	"avatarAllowedPrime": "false",
	"avatarAllowedArtist": "true",
	"avatarAllowedPartner": "true",
	"avatarAllowedStaff": "true",
	"avatarAllowedEveryone": "false",
	"avatarAllowedIncludeBits": "true",
	"avatarAllowedBitsMinimum": "1000",
	"enablePronouns": "true",
	"avatarSize": "34",
	"avatarShape": "squircle",
	"chatDefaultNameColorForced": "false",
	"chatMessageUserInfoElementSpacing": "12",
	"overlayShadowColor": "#000000",
	"overlayShadowXOffset": "0",
	"overlayShadowYOffset": "1",
	"overlayShadowBlurRadius": "2",
	"overlayOutlineColor": "#000000",
	"overlayOutlineSize": "1",
	"pronounsAeAer": "Ae / Aer",
	"pronounsAny": "Any",
	"pronounsEEm": "E / Em",
	"pronounsFaeFaer": "Fae / Faer",
	"pronounsHeHim": "He / Him",
	"pronounsHeShe": "He / She",
	"pronounsHeThem": "He / They",
	"pronounsItIts": "It / Its",
	"pronounsOther": "Other",
	"pronounsPerPer": "Per / Per",
	"pronounsSheHer": "She / Her",
	"pronounsSheThem": "She / They",
	"pronounsTheyThem": "They / Them",
	"pronounsVeVer": "Ve / Ver",
	"pronounsXeXem": "Xe / Xem",
	"pronounsZieHir": "Zie / Hir",
	"enableTwitchBadges": "true",
	"enableTwitchRoleBadges": "true",
	"enableTwitchGameBadges": "true",
	"enableTwitchPartnerBadges": "true",
	"enableTwitchBitsBadges": "true",
	"enableTwitchSubGiftsBadges": "true",
	"enableTwitchLeaderboardBadges": "true",
	"enableTwitchFounderBadges": "true",
	"enableTwitchStaffBadges": "true",
	"enableTwitchMomentsBadges": "false",
	"enableTwitchStatusBadges": "false",
	"enableTwitchPredictionsBadges": "true",
	"enableTwitchPrimeGamingBadges": "true",
	"enableTwitchTurboBadges": "true",
	"enableTwitchSubscriberBadges": "true",
	"enableTwitchConBadges": "true",
	"enableTwitchCharityBadges": "true",
	"enableTwitchHypeTrainBadges": "true",
	"badgeBorderRadius": "4",
	"badgeSpacing": "2",
	"badgeSize": "26",
	"chatNameFontWeightExtra": "1.2",
	"chatNameUsesGradient": "true",
	"chatDefaultNameColorSecondary": "#FFFFFF",
	"chatNameGradientAngle": "170",
	"chatNameLetterSpacing": "1",
	"messageLetterSpacing": "0",
	"pronounsColor": "#808080",
	"pronounsUsesGradient": "true",
	"pronounsColorSecondary": "#FFFFFF",
	"pronounsGradientAngle": "170",
	"pronounsFont": "Manrope",
	"pronounsFontSize": "12",
	"pronounsFontWeight": "900",
	"pronounsFontWeightExtra": "0.5",
	"pronounsLetterSpacing": "0",
	"chatNameTransform": "uppercase",
	"messageTransform": "none",
	"pronounsTransform": "uppercase",
	"enableFlags": "true",
	"flagsBorderRadius": "4",
	"flagsSize": "22",
	"flagsSpacing": "2",
	"chatBlockSpacing": "16",
	"messageBoldAmount": "1.2",
	"chatShowCommonEmotes": "true",
	"maxFlagCount": "6",
	"enableMessageTimestamps": "false",
	"timestampUsesGradient": "true",
	"timestampColor": "#808080",
	"timestampColorSecondary": "#FFFFFF",
	"timestampGradientAngle": "170",
	"timestampFont": "Manrope",
	"timestampFontSize": "12",
	"timestampFontWeight": "900",
	"timestampFontWeightExtra": "0.5",
	"timestampLetterSpacing": "0",
	"timestampPadding": "10",
	"timestampFormat": "H:mm:ss",
	"timestampTracksUptime": "false",
	"chatBlurHistory": "false",
	"chatBlurHistoryStep": "0.2",
	"chatHistoryStartAfter": "4",
	"hideTimestampsOnBigEmotes": "true",
	"chatMessageUserInfoBackgroundColor": "#00000000",
	"chatMessageUserInfoElementPaddingVertical": "0",
	"chatMessageUserInfoElementPaddingHorizontal": "0",
	"chatMessageUserInfoElementBorderRadius": "0",
	"chatBlockWidth": "-webkit-fill-available",
	"allowUserCustomizations": "true",
	"avatarAllowedAffiliates": "false",
	"applyBorderRadiusToSubBadges": "false",
	"chatOutlinesReflectUserColor": "false",
	"chatOutlinesUserColorAmount": "50",
	"chatBackgroundReflectUserColor": "false",
	"chatBackgroundUserColorAmount": "50",
	"nameColorMinBrightness": "30",
	"nameColorMaxBrightness": "100",
	"ensureNameColorsAreBrightEnough": "true",
	"chatMessageUserInfoBackgroundReflectUserColor": "false",
	"chatMessageUserInfoBackgroundUserColorAmount": "50",
	"chatMessageUserInfoOutlines": "false",
	"chatMessageUserInfoOutlinesColor": "#ffffff",
	"chatMessageUserInfoOutlinesReflectUserColor": "false",
	"chatMessageUserInfoOutlinesUserColorAmount": "100",
	"chatMessageUserInfoOutlinesSize": "1",
	"chatMessageUserInfoOutlineStyle": "solid",
	"pronounsReflectUserColor": "false",
	"pronounsUserColorAmount": "50",
	"chatMessageReflectUserColor": "true",
	"chatMessageUserColorAmount": "10",
	"chatMessageUserInfoBottomMargin": "3",
	"chatMessagesHardCap": "30",
	"debugFreezeChat": "false",
	"enableEmotes": "true",
	"emotesParseToImage": "true",
	"emotesBorderRadius": "0",
	"chatBigEmoteMargin": "0",
	"chatBigEmoteMarginVertical": "4",
	"overlayForceWidth": "false",
	"overlayWidth": "700",
	"chatMessageEnableSeparators": "false",
	"chatMessageSeparatorColor": "#ffffff20",
	"chatMessageSeparatorWidth": "1",
	"chatMessageSeparatorSpacing": "0",
	"chatMessageSeparatorStyle": "solid",
	"hideDefaultAvatars": "true",
	"avatarAllowedIncludeGifts": "true",
	"avatarAllowedGiftsMinimum": "5",
	"chatHighlightGlowRadius": "3",
	"chatShowCheermotes": "true",
	"chatShowCheermotesColor": "true",
	"chatShowCheermotesAnimated": "true",
	"chatScaleHistory": "false",
	"chatScaleHistoryAmount": "-3",
	"chatAnimationsIn": "true",
	"chatAnimationsOut": "true",
	"animationsInDuration": "0.5",
	"animationsOutDuration": "0.75",
	"animationsInOriginPoint": "center center",
	"animationsOutOriginPoint": "left center",
	"animationsInTimingFunc": "EaseInOutCubic",
	"animationsOutTimingFunc": "EaseInBack",
	"messageInOpacityStart": "0",
	"messageInOpacityEnd": "100",
	"messageInXTransformStart": "0",
	"messageInXTransformEnd": "0",
	"messageInYTransformStart": "3",
	"messageInYTransformEnd": "0",
	"messageInBlurStart": "4",
	"messageInBlurEnd": "0",
	"messageInScaleXStart": "90",
	"messageInScaleXEnd": "100",
	"messageInScaleYStart": "90",
	"messageInScaleYEnd": "100",
	"messageInSkewXStart": "0",
	"messageInSkewXEnd": "0",
	"messageInSkewYStart": "0",
	"messageInSkewYEnd": "0",
	"messageInRotateStart": "0",
	"messageInRotateEnd": "0",
	"messageInBrightnessStart": "100",
	"messageInBrightnessEnd": "100",
	"messageInContrastStart": "100",
	"messageInContrastEnd": "100",
	"messageInSaturateStart": "100",
	"messageInSaturateEnd": "100",
	"messageInHueRotateStart": "0",
	"messageInHueRotateEnd": "0",
	"messageOutOpacityStart": "100",
	"messageOutOpacityEnd": "0",
	"messageOutXTransformStart": "0",
	"messageOutXTransformEnd": "-100",
	"messageOutYTransformStart": "0",
	"messageOutYTransformEnd": "0",
	"messageOutBlurStart": "0",
	"messageOutBlurEnd": "0",
	"messageOutScaleXStart": "100",
	"messageOutScaleXEnd": "100",
	"messageOutScaleYStart": "100",
	"messageOutScaleYEnd": "100",
	"messageOutSkewXStart": "0",
	"messageOutSkewXEnd": "0",
	"messageOutSkewYStart": "0",
	"messageOutSkewYEnd": "0",
	"messageOutRotateStart": "0",
	"messageOutRotateEnd": "0",
	"messageOutBrightnessStart": "100",
	"messageOutBrightnessEnd": "100",
	"messageOutContrastStart": "100",
	"messageOutContrastEnd": "100",
	"messageOutSaturateStart": "100",
	"messageOutSaturateEnd": "100",
	"messageOutHueRotateStart": "0",
	"messageOutHueRotateEnd": "0",
	"chatHistoryOriginPoint": "center center",
	"sound_newMsg_URL": "sounds/woosh-1.ogg",
	"sound_newMsg_Volume": "50",
	"sound_newMsg_Delay": "0.15",
	"sound_newMsg_PitchRandMin": "85",
	"sound_newMsg_PitchRandMax": "150",
	"sound_newMsg_Enabled": "false",
	"playSoundOnSystemMessages": "false",
	"playSoundOnEmoteOnlyMessages": "false",
	"enableConstantNoiseToFixCEFBeingWeird": "false",
	"noiseLowpassHz": "400",
	"noiseVolume": "5",
	"ajaxTimeout": "7",
	"sound_newMsg_CustomURLs": "",
	"avatarAllowedIncludeTotalMessages": "false",
	"avatarAllowedMessageThreshold": "200",
	"obs_ip": "127.0.0.1",
	"obs_port": "4455",
	"obs_password": "",
	"obs_usePassword": "false",
	"bsvodaudio_audioSource": "",
	"bsvodaudio_vodAudioTrack": "2",
	"bsvodaudio_syncRemoteDBs": "true",
	"bsvodaudio_remoteDBURLs": "https://gist.githubusercontent.com/TheBlackParrot/ea2126f4f2af4f47455cd072d2e975e5/raw/db.json",
	"bsplus_ip": "127.0.0.1",
	"bsplus_port": "2947",
	"bsvodaudio_muteOnConflict": "true",
	"bsvodaudio_muteOnUnknown": "true",
	"bsvodaudio_muteOnMenu": "true",
	"enableAvatarsAsBackground": "false",
	"avatarsBGSize": "380",
	"avatarsBGHorizontalPadding": "8",
	"avatarsBGVerticalPadding": "12",
	"avatarsBGBorderRadius": "8",
	"avatarsBGMagnification": "140",
	"avatarsBGStartOpacity": "100",
	"avatarsBGEndOpacity": "0",
	"avatarsBGStartFadeAt": "5",
	"avatarsBGEndFadeAt": "60",
	"avatarsBGFadeAngle": "135",
	"avatarsBGAnimateAppearance": "false",
	"avatarsBGAnimationDuration": "1",
	"avatarsBGAnimationDelay": "0.2",
	"avatarsBGAnimationTimingFunc": "EaseOutCubic",
	"enableAvatarsBGOutline": "false",
	"enableAvatarsBGShadow": "true",
	"applyGradientToBadges": "false",
	"badgeGradientColorStart": "#777777ff",
	"badgeGradientColorEnd": "#000000ff",
	"badgeGradientAngle": "150",
	"badgeGradientStart": "0",
	"badgeGradientEnd": "80",
	"badgeGradientBlendMode": "plus-lighter",
	"enableEventTagsSubs": "true",
	"enableEventTagsBits": "true",
	"eventTagsResubFormat": "%tier resubscription (%amount months)",
	"eventTagsCheerFormat": "cheered %amount bits",
	"eventTagsNewSubFormat": "new %tier subscription",
	"eventTagsColor": "#FFFFFFFF",
	"eventTagsFont": "Manrope",
	"eventTagsFontSize": "13",
	"eventTagsFontWeight": "900",
	"eventTagsFontWeightExtra": "0.75",
	"eventTagsLetterSpacing": "0",
	"eventTagsTransform": "uppercase",
	"eventTagsLineHeight": "26",
	"useNewerEmojiRegex": "false",
	"use3dTransformsOnAnimations": "true",
	"enableAffiliateBadges": "false",
	"enableBotBadges": "true",
	"autoHideAllKnownBots": "true",
	"chatNameUsesProminentColor": "false",
	"avatarsBGBorder": "false",
	"avatarsBGBorderColor": "#FFFFFF40",
	"avatarsBGBorderSize": "1",
	"avatarsBGBorderStyle": "solid",
	"allowConsoleMessages": "false",
	"useLowQualityImages": "false",
	"gradientFadeMaskEnabled": "false",
	"gradientFadeMaskAngle": "0",
	"gradientFadeMaskStart": "67",
	"gradientFadeMaskEnd": "99",
	"messageBlockDirection": "false",
	"eventTagsPlanNamePrime": "Twitch Prime",
	"eventTagsPlanNameTier1": "Tier 1",
	"eventTagsPlanNameTier2": "Tier 2",
	"eventTagsPlanNameTier3": "Tier 3",
	"keepAmountOfBackups": "100",
	"messageOffsetVertical": "0",
	"messageOffsetHorizontal": "0",
	"userInfoOffsetVertical": "0",
	"userInfoOffsetHorizontal": "0",
	"spotify_enableScannable": "true",
	"spotify_enableArt": "true",
	"spotify_artSize": "52",
	"spotify_enableArtOutline": "true",
	"spotify_artOutlineSize": "2",
	"spotify_overlayMargin": "12",
	"spotify_elementSpacing": "12",
	"spotify_enableArtOutlineProgress": "true",
	"spotify_titleFontFamily": "Manrope",
	"spotify_titleFontSize": "19",
	"spotify_titleFontWeight": "900",
	"spotify_titleAdditionalFontWeight": "0.2",
	"spotify_titleTransform": "none",
	"spotify_artistFontFamily": "Manrope",
	"spotify_artistFontSize": "12",
	"spotify_artistFontWeight": "900",
	"spotify_artistAdditionalFontWeight": "0",
	"spotify_artistTransform": "none",
	"spotify_enableOutlineEffects": "true",
	"spotify_outlineColor": "#000000FF",
	"spotify_outlineSize": "1",
	"spotify_enableShadowEffects": "true",
	"spotify_shadowColor": "#000000FF",
	"spotify_shadowXOffset": "0",
	"spotify_shadowYOffset": "1",
	"spotify_shadowBlurRadius": "2",
	"spotify_enableBoxShadowEffects": "true",
	"spotify_boxShadowColor": "#000000FF",
	"spotify_boxShadowXOffset": "0",
	"spotify_boxShadowYOffset": "8",
	"spotify_boxShadowBlurRadius": "9",
	"spotify_boxShadowBlurInset": "-5",
	"spotify_refreshInterval": "15",
	"spotify_progressInterval": "1",
	"spotify_enableMarquee": "true",
	"spotify_marqueeDelay": "7",
	"spotify_marqueeGap": "100",
	"spotify_marqueeSpeed": "20",
	"spotify_titleColor": "#FFFFFFFF",
	"spotify_artistColor": "#AAAAAAFF",
	"spotify_artistColorReflectsArtColor": "true",
	"spotify_artistGradient": "true",
	"spotify_artistGradientColor": "#FFFFFFFF",
	"spotify_artistGradientAngle": "170",
	"spotify_scannableUseBlack": "false",
	"spotify_artistColorReflectsArtColorDarker": "false",
	"chatNameFontItalic": "false",
	"chatMessageFontItalic": "false",
	"eventTagsFontItalic": "false",
	"pronounsFontItalic": "false",
	"spotify_titleFontItalic": "false",
	"spotify_artistFontItalic": "false",
	"timestampFontItalic": "false",
	"chatMessageBackgroundColor": "#00000000",
	"chatMessageBackgroundReflectUserColor": "false",
	"chatMessageBackgroundUserColorAmount": "20",
	"chatMessagePaddingVertical": "0",
	"chatMessagePaddingHorizontal": "0",
	"chatMessageBorderRadius": "0",
	"chatMessageOutlines": "false",
	"chatMessageOutlinesColor": "#FFFFFFFF",
	"chatMessageOutlinesReflectUserColor": "false",
	"chatMessageOutlinesUserColorAmount": "100",
	"chatMessageOutlinesSize": "1",
	"chatMessageOutlinesStyle": "solid",
	"allowModeratorsToRefresh": "false",
	"allowParrotToRefresh": "false",
	"bigNoNoWords": "faggot\nhermie\nmongol\nmongoloid\nnigga\nnigger\nraghead\nretard\nretarded\nshemale\ntrannie\ntranny\ntransexual\ntranssexual\nphaggot",
	"bigNoNoWordsWordSpecific": "fag\nnig\nrape\ntard\nphag\nmong",
	"spotify_hideOnPause": "true",
	"spotify_artBorderRadius": "8",
	"spotify_scannableBorderRadius": "8",
	"spotify_scannableGradientAngle": "170",
	"spotify_scannableGradientColorStart": "#FFFFFFFF",
	"spotify_scannableGradientPercentStart": "10",
	"spotify_scannableGradientColorEnd": "#333333FF",
	"spotify_scannableGradientPercentEnd": "80",
	"spotify_scannableGradientBlendMode": "soft-light",
	"spotify_enableScannableGradient": "true",
	"cmdEnableBSR": "true",
	"spotify_enableArtistAlbumCycle": "true",
	"spotify_artistAlbumCycleDelay": "10",
	"spotify_enableAnimations": "true",
	"clock_overlayMarginHorizontal": "8",
	"clock_overlayMarginVertical": "8",
	"clock_elementSpacing": "4",
	"clock_enableShadowEffects": "true",
	"clock_shadowColor": "#000000FF",
	"clock_shadowXOffset": "0",
	"clock_shadowYOffset": "1",
	"clock_shadowBlurRadius": "2",
	"clock_enableOutlineEffects": "true",
	"clock_outlineColor": "#000000FF",
	"clock_outlineSize": "1",
	"clock_headerFont": "Manrope",
	"clock_headerFontItalic": "false",
	"clock_headerFontSize": "12",
	"clock_headerFontWeight": "900",
	"clock_headerFontWeightExtra": "0.7",
	"clock_headerLetterSpacing": "0",
	"clock_clockFont": "Manrope",
	"clock_clockFontItalic": "false",
	"clock_clockFontSize": "27",
	"clock_clockFontWeight": "900",
	"clock_clockFontWeightExtra": "1",
	"clock_clockLetterSpacing": "-1",
	"clock_secondsFont": "Manrope",
	"clock_secondsFontItalic": "false",
	"clock_secondsFontSize": "21",
	"clock_secondsFontWeight": "900",
	"clock_secondsFontWeightExtra": "0.9",
	"clock_secondsLetterSpacing": "-1",
	"clock_overrideHeader": "false",
	"clock_overrideHeaderString": "",
	"clock_headerColor": "#A695FFFF",
	"clock_headerAdaptColor": "false",
	"clock_use12Hour": "false",
	"clock_clockColor": "#FFFFFFFF",
	"clock_clockAdaptColor": "false",
	"clock_meridiemFont": "Manrope",
	"clock_meridiemFontItalic": "false",
	"clock_meridiemFontSize": "12",
	"clock_meridiemFontWeight": "900",
	"clock_meridiemFontWeightExtra": "0.5",
	"clock_meridiemLetterSpacing": "1",
	"clock_padHour": "true",
	"internationalNameMargin": "12",
	"internationalNameSize": "75",
	"internationalNameWeightScaling": "50",
	"internationalNameSaturation": "33",
	"panel_primaryColor": "#cbadffff",
	"spotify_scannableHeight": "52",
	"spotify_lineHeight": "24",
	"spotify_useRTL": "false",
	"spotify_flipDetails": "false",
	"spotify_artOutlineBrightness": "175",
	"spotify_showSingleIfSingle": "true",
	"enableTwitchEventBadges": "true",
	"chatNameUsesProminentColorAsFallback": "true",
	"enableBadgeBorder": "false",
	"badgeBorderColor": "#ffffff50",
	"badgeBorderSize": "1",
	"badgeBorderStyle": "solid",
	"hideCustomRewardMessages": "false",
	"enableCustomBadges_subscriber": "true",
	"enableCustomBadges_bits": "true"
};
// i typed out the bigNoNoWords so you don't have to, i'm sorry :(
// it's gotta know what to remove

for(let setting in defaultConfig) {
	if(localStorage.getItem(`setting_${setting}`) === null) {
		console.log(`saving default value for setting ${setting}`);
		localStorage.setItem(`setting_${setting}`, defaultConfig[setting]);
	}
}