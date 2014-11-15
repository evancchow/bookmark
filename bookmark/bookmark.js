

updateURL = function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
        function(tabs) {
            updateBox(tabs);

            // put saveURL, in (?) fetchURL here so get synchronous performance
        });
}   

updateBox = function(tabs) {
    var siteURL = tabs[0].url;
    saveURL(siteURL);



        // var siteURL = tabs[0].url;        
        // var url_txtbox = document.createElement('div');
        // var url_txt = "";
        // url_txt += encodeURI(siteURL);
        // url_txtbox.innerHTML = url_txt;
        // document.body.appendChild(url_txtbox);
}

printUrl = function(url) {
    /* Given a url, create a new DOM element and display it. */
    /* Ideally: open url in a new tab.

}

document.addEventListener('DOMContentLoaded', function() {
    updateURL();

    /* Here, feel free to load variables and things
        from outside scripts (just put in HTML first). */
    // var greeting = document.createElement('div');
    // greeting.innerHTML = test_num; // load variable from outside script
    // document.body.appendChild(greeting);

});

