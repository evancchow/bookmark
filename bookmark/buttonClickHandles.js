function nowCLick() {
    /* Pulls a page off the internal array and displays it for you. */

	fetchUrl(function(newUrl){
		if(newUrl)
			chrome.tabs.create({url : newUrl});
	});
}

function laterClick() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
        function(tabs) {
        	saveUrl(tabs[0].url);
            chrome.tabs.query({ 'active': true }, function(tabs) {
                chrome.tabs.remove(tabs[0].id);
            });
        });
}
