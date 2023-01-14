document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			type: document.getElementById('type').value,
			name: document.getElementById('name').value
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('type').value = '';
	document.getElementById('name').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		name: document.getElementById('type').value,
		email: document.getElementById('name').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'type',
		'name'
	], function(result) {
		document.getElementById('type').value = result.type;
		document.getElementById('name').value = result.name;
	});
});
