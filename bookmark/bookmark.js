updateURL = function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
        function(tabs) {
            updateBox(tabs);

            // put saveURL, in (?) fetchURL here so get synchronous performance
        });
}   

updateBox = function(tabs) {
    /* Given the tabs, get the URL, and (1) save it to disk,
        (2) fetch it, then (3) write list to the little Chrome window. */

    // The current tab's url
    var siteURL = tabs[0].url; // chrome://extensions

    /* Check if NOW button is clicked */
    var num_urls = 0;
    document.getElementById("Later").onclick = function() {
        nowClick();
        num_urls = num_urls - 1;
    }
    document.getElementById("Now").onclick = function() {
        saveUrl(siteURL); 
        num_urls = num_urls + 1;
    }
    document.getElementById("ArraySize").onclick = function() {
        arraySize(printItem);
    }
    document.getElementById("PrintItems").onclick = function() {
        printItems(printItem);
    }

}

printItem = function(item, text) {
    var itembox = document.createElement('div');
    if (!text) {
        itembox.innerHTML = item;
    } else {
        itembox.innerHTML = text + " " + item
    }
    document.body.appendChild(itembox);
}

printUrl = function(siteURL) {
    var url_txtbox = document.createElement('div');
    var url_txt = "";
    url_txt += siteURL.toString();
    url_txtbox.innerHTML = url_txt;
    document.body.appendChild(url_txtbox);
}

document.addEventListener('DOMContentLoaded', function() {
    /* Print number of items you currently have. */

    updateURL();

    /* Here, feel free to load variables and things
        from outside scripts (just put in HTML first). */
    // var greeting = document.createElement('div');
    // greeting.innerHTML = test_num; // load variable from outside script
    // document.body.appendChild(greeting);
});

