

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
    var siteURL = tabs[0].url;
    printUrl(siteURL);
}

printUrl = function(siteURL) {
    var url_txtbox = document.createElement('div');
    var url_txt = "";
    url_txt += encodeURI(siteURL);
    url_txtbox.innerHTML = url_txt;
    document.body.appendChild(url_txtbox);
}

document.addEventListener('DOMContentLoaded', function() {
    updateURL();

    /* Here, feel free to load variables and things
        from outside scripts (just put in HTML first). */
    var greeting = document.createElement('div');
    greeting.innerHTML = test_num; // load variable from outside script
    document.body.appendChild(greeting);

});

