const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
    }

    append(data) {
      var node = new Node (data, null, null)
      if(this.length ==0) {
        this._head = node;
        this._tail = node;
      } else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      this.length++;

    }

    head() {
      if(this.length==0) {
        return null;
      } else {
        return this._head.data;
      }
    }

    tail() {
      if(this.length==0) {
        return null;
      } else {
        return this._tail.data;
      }
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
