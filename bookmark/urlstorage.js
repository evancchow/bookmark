function saveUrl(url) {
    chrome.storage.local.get(null, function(data){
        var queue = data.myqueue;
        console.log("about to enqueue");
        console.log(queue);
        if (!queue) {
            console.log("queue not exists!");
            queue = [];
        }
        queue.push(url);
        chrome.storage.local.set({myqueue : queue});
    });
}

function printItems(callback) {
    chrome.storage.local.get(null, function(data) {
        var queue = data.myqueue;
        if (queue) {
            for (i = 0; i < queue.length; i++) {
                callback(queue[i]);
            }
        }
    })
}

function closeCurrTab() {
    chrome.tabs.query({ active: true }, function(tabs) {
             chrome.tabs.remove(tabs[0].id);
    });
}
function clearUrls() {
    chrome.storage.local.set({"myqueue" : []});
}

function fetchUrl(callback) {
    chrome.storage.local.get(null, function(data){
        var queue = data.myqueue;
        var url = null;
        console.log("about to dequeue");
        console.log(queue);
        if (queue) {
            url = queue.shift();
            chrome.storage.local.set({myqueue : queue});    
        }
        if (callback) {
            callback(url);
        } else {
            console.log(url);
        }
    });
}

function arraySize(callback) {
    chrome.storage.local.get(null, function(data) {
        var array = data.myqueue;
        callback(array.length);
    });
}

