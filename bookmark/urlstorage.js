function saveUrl(url) {
    chrome.storage.sync.get({myqueue : []}, function(data){
        // var myqueue = newQueue();

        // console.log(data);
        var queue = new Queue();
        // if(data) {
            // console.log("the queue exists");
        // var myqueue = data.myqueue;          
        // }
        queue.enqueue(url);
        // console.log(myqueue.getArray().toString());
        chrome.storage.sync.set({myqueue : queue});
        console.log("After");
        chrome.storage.sync.get({myqueue : []}, function(data) {
            console.log(data);
        });
    });
}

// function updateStorage(queue) {
//     chrome.storage.sync.set({"myqueue" : queue});
// } 

function clearUrls() {
    var myqueue = new Queue();
    chrome.storage.sync.set({"myqueue" : myqueue});
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

