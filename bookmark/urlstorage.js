/* Remember, "queue" is not actually a queue. It's just an array. */

function saveUrl(url) {
    chrome.storage.local.get(null, function(data){
        /* Do not save a url if it's already stored. */
        var queue = data.myqueue;
        if (queue.indexOf(url) != -1) { // if array already contains url
            return;
        } else {
            if (!queue) {
                queue = [];
            }
            queue.push(url);
            chrome.storage.local.set({myqueue : queue});            
        }
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

function clearUrls() {
    chrome.storage.local.set({"myqueue" : []});
}

function fetchUrl(callback) {
    chrome.storage.local.get(null, function(data){
        var queue = data.myqueue;
        var url = null;
        if (queue) {
            /* Instead of returning the oldest, get random page from array, 
                remove it from array, and update the local Chrome storage. */
            url_ix = Math.floor(Math.random()*queue.length);
            url = queue[url_ix];
            queue.splice(url_ix, 1); // remove
            chrome.storage.local.set({myqueue : queue});    
        };
        if (callback) {
            callback(url);
        } else {
            console.log(url);
        }
    });
}

function countUrls(callback) {
    chrome.storage.local.get(null, function(data) {
        console.log(data);
        var queue = data.myqueue;
        if (!queue) {
            queue = [];
            chrome.storage.local.set({myqueue : queue});
        }
        callback(queue.length);
    });
}


