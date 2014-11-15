function saveUrl(url) {
	chrome.storage.sync.get("URLqueue", function(queue){
		queue.enqueue(url);
		/*Not sure if this is necessary*/
		chrome.storage.sync.set("URLqueue",queue); 
	});	
}

function fetchUrl(callback) {
	chrome.storage.sync.get("URLqueue", function(queue){
		callback(queue.dequeue(url));
		/*Not sure if this is necessary*/
		chrome.storage.sync.set("URLqueue",queue); 
	});	
}