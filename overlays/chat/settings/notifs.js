const defaultNotifSettings = {
	bgColor: "var(--notif-color-normal)",
	textColor: "#FFFFFF",
	duration: 12
}

function addNotification(message, settings) {
	if(!message) { return; }
	
	let actualSettings = Object.assign({}, defaultNotifSettings);
	Object.assign(actualSettings, settings);

	let notifElement = $(`<div class="notif" style="display: none;"></div>`);
	notifElement.css("background-color", actualSettings.bgColor);
	notifElement.css("color", actualSettings.textColor);

	let notifMessage = $('<div class="notifMessage"></div>').text(message);
	let notifCloseButton = $('<div class="notifClose"><i class="fas fa-times"></i></div>');
	notifElement.append(notifMessage).append(notifCloseButton);

	$("#notificationWrapper").append(notifElement);
	notifElement.fadeIn(100, function() {
		setTimeout(function() {
			notifElement.fadeOut(250, function() {
				this.remove();
			});
		}, actualSettings.duration * 1000);
	});
}

$("body").on("click", ".notifClose", function(e) {
	e.preventDefault();

	let parentElement = $(this).parent();
	parentElement.remove();
})