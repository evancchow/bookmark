function saveUrl(url) {
	chrome.storage.sync.get("URLqueue", function(queue){
		if (!queue)
			queue = Queue();
		queue.enqueue(url);
		/*Not sure if this is necessary*/
		chrome.storage.sync.set("URLqueue",queue); 
	});	
}

function fetchUrl(callback) {
	chrome.storage.sync.get("URLqueue", function(queue){
		if (queue) {
			url = queue.dequeue();
			if(url) {
				callback(url); // Evan: changed from callback()
				/*Not sure if this is necessary*/
				chrome.storage.sync.set("URLqueue",queue); 
			}
		}
	});	
}

function fetchUrlListLength(callback) {
	chrome.storage.sync.get("URLqueue", function(queue){
		if (queue) {
			callback(queue.length);
		} else
		{
			callback(0);
		};
	});	
}