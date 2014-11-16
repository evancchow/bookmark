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
    chrome.storage.sync.get("myqueue", function(data){
        if (!data) {
            alert("No data/no queue!");
        } else {
            /* If there is a queue, get first item (deque) and then
                return the callback. */
            var myqueue = data.myqueue;
            var item = myqueue.deque();
            chrome.storage.sync.set({"myqueue" : myqueue});
            if (callback) {
                callback(item);
            } else {
                console.log(item);
            }
        }
    });
}

