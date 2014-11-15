// chrome.tabs.query({'active' : true, 'lastFocusedWindow' : true}, function(tabs) {
//     var url = tabs[0].url;
// })

var run_script = {

    updateURL: function() {
        var url = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
            function (tabs) {
                var url = tabs[0].url;
                return url;
            });

        var txt = document.createElement('div');
        txt.innerHTML = "HI DURRR";
        document.body.appendChild(txt);
    }   
}

document.addEventListener('DOMContentLoaded', function() {
    run_script.updateURL();
});

