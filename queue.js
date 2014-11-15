function Queue() {
	Queue.makeNode = function() {
		return {data: null, next: null};
	};

	this.start = null;
	this.end = null;
	this.length = 0;

	this.enqueue = function(data) {
		if (this.start === null) {
			this.start = Queue.makeNode();
			this.end = this.start;
		} else {
			this.end.next = Queue.makeNode();
			this.end = this.end.next;
		};
		this.end.data = data;
		this.length = this.length + 1;
	};

	this.dequeue = function() {
		if (this.length === 0)
			return null;

		data = this.start.data;
		this.start = this.start.next;
		this.length = this.length - 1;
		return data;
	}

	this.length = function() {
		return this.length;
	}

	this.isEmpty = function() {
		return this.length === 0;
	}
}