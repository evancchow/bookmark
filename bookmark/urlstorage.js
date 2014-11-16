function saveUrl(url) {
	chrome.storage.sync.set({"myurl" : url});
}

function fetchUrl(callback) {
	chrome.storage.sync.get("myurl", function(url) {
		if (callback) {
            callback(url.myurl);
        } else { 
            console.log(url);
        };
	});
}