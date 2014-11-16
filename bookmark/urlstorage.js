function saveUrl(url) {
	chrome.storage.sync.set({"myurl" : url}, function(result) {
		chrome.storage.sync.get('myurl', function(result) {
			alert(result.myurl);
		});
	});
}

function hiThere() {
	alert("hi there!");
}
function fetchUrl(callback) {
	chrome.storage.sync.get("myurl", function(url) {
		callback(url);
	});
}