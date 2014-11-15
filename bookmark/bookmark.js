

// Run script. 
var run_script = {
    updateURL: function() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
            function (tabs) {
                var siteURL = tabs[0].url;        
                var url_txtbox = document.createElement('div');
                var url_txt = "";
                url_txt += encodeURI(siteURL);
                url_txtbox.innerHTML = url_txt;
                document.body.appendChild(url_txtbox);
            });
    }   
}

document.addEventListener('DOMContentLoaded', function() {
    run_script.updateURL();

    var greeting = document.createElement('div');
    greeting.innerHTML = test_num; // load variable from outside script
    document.body.appendChild(greeting);



    // Test pulling in a variable from another JS file
    // $.getScript("test.js", function() {
    //     alert("Loaded external script test.js!");
    //     var mydiv = document.getElementbyID('test_field');
    //     mydiv.innerText = "HI THERE";
    // });
});

