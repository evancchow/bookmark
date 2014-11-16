function nowCLick() {

	fetchUrl(function(newUrl){
		if(newUrl)
			chrome.tabs.create({url : newUrl});
	});
}

function laterCLick() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
        function(tabs) {
        	if(tabs.length > 0)
	        	saveUrl(tabs[0].url);
                chrome.tabs.query({ active: true }, function(tabs) {
                    chrome.tabs.remove(tabs[0].id);
                });
        });
}
