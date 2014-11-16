function saveUrl(url) {
    chrome.storage.sync.get({myqueue : []}, function(data){
        var queue;
        if(data) {
            console.log("the queue exists");
            queue = data.myqueue;          
        } else {
            console.log("queue does not exist");
            queue = new Queue();
        }
        console.log("queue from data.myqueue");
        console.log(queue);
        console.log("a new queue");
        var diffqueue = new Queue();
        console.log(diffqueue);
        console.log("trying to cast to queue");
        var castqueue = Object.create(Queue, queue);
        console.log(castqueue);
        console.log("about to enqueue");
        queue.enqueue(url); // not working
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

