// chrome.tabs.query({'active' : true, 'lastFocusedWindow' : true}, function(tabs) {
//     var url = tabs[0].url;
// })

var run_script = {

    updateURL: function() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
            function (tabs) {
                var siteURL = tabs[0].url;        
                var txt = document.createElement('div');
                var final_txt = "";
                final_txt += encodeURI(siteURL);
                txt.innerHTML = final_txt;
                document.body.appendChild(txt);
            });

    }   
}

document.addEventListener('DOMContentLoaded', function() {
    run_script.updateURL();
});

