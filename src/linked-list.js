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
      for (var i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    }

    insertAt(index, data) {
      var current = this._head;
      var newNode = new Node (data, null, null);



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
