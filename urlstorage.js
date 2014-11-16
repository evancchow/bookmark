function saveUrl(url) {
	chrome.storage.syncset("myurl", url, function() {
		alert("successfully stored url");
	});
}

function fetchUrl(callback) {
	chrome.storage.sync.get("myurl", function(url) {
		callback(url);
	});
}