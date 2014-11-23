function Queue() {
    Queue.makeNode = function() {
        return {data: null, next: null};
    };

    this.start = null;
    this.end = null;
    this.length = 0;
    this.hashtable = {};

    this.enqueue = function(data) {
        /* Only push an item to the queue if it's not there already, i.e.
            in the internal hash table. */
        if (this.contains(data)) {
            return;
        }

        if (this.start === null) {
            this.start = Queue.makeNode();
            this.end = this.start;
        } else {
            this.end.next = Queue.makeNode();
            this.end = this.end.next;
        };
        this.end.data = data;
        this.length++;

        // Finally, add the item to the hash table
        this.hashtable[data] = true;
    };

    this.dequeue = function() {
        if (this.length === 0)
            return null;

        var data = this.start.data;
        this.start = this.start.next;
        this.length = this.length - 1;

        // Delete from internal hash table
        delete this.hashtable[data];
        
        return data;
    }

    this.size = function() {
        return this.length;
    }

    this.isEmpty = function() {
        return this.length === 0;
    }

    this.getArray = function() {
        var arr = [];
        var index = this.start;
        while(index){
            arr[arr.length] = index.data;
            index = index.next;
        }
        return arr;
    }

    this.contains = function(item) {
        return (item in this.hashtable);
    }
}