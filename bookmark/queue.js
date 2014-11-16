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
        this.length++;
    };

    this.dequeue = function() {
        if (this.length === 0)
            return null;

        var data = this.start.data;
        this.start = this.start.next;
        this.length = this.length - 1;
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
}