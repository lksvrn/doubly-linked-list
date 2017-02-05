const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      var newNode = new Node (data, null, null)
      if(this.length ==0) {
        this._head = newNode;
        this._tail = newNode;
      } else {
        this._tail.next = newNode;
        newNode.prev = this._tail;
        this._tail = newNode;
      }
      this.length++;

    }

    head() {
      if(this.length == 0) {
        return null;
      } else {
        return this._head.data;
      }
    }

    tail() {
      if(this.length == 0) {
        return null;
      } else {
        return this._tail.data;
      }
    }

    at(index) {
      var current = this._head;
      for (var i = 0; i < this.length; i++) {
        if(index == i) {
          return current.data
        } else {
        current = current.next;
        }
      }
      return current.data;
    }

    insertAt(index, data) {
      var current = this._head;
      var newNode =new Node(data,null,null);
      for (var i = 0; i < this.length; i++) {
        if(index == i) {
          newNode.next = current;
          newNode.prev = current.prev;
          current.prev.next = newNode;
          this.length++;
          /*return true;*/
        } else {
        current = current.next;
        }
      }
    }

    isEmpty() {
      if(this.length == 0) {
        return true;
      } else {
        return false;
      }
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
