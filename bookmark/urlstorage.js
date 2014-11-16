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

function arraySize() {
    chrome.storage.local.get(null, function(data) {
        var array = data.myqueue;
        return array.length;
    });
}

