const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      var newNode = new Node (data, null, null)
      if(this.length == 0) {
        this._head = newNode;
        this._tail = newNode;
      } else {
        this._tail.next = newNode;
        newNode.prev = this._tail;
        this._tail = newNode;
      }
      this.length++;
      return this;
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
      if(this.length === 0 || index > this.length) {
        return 'Error';
      }
      for (var i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    }

    insertAt(index, data) {
      var current = this._head;
      var beforeNodeToInsert = null;
      var newNode =new Node(data,null,null);
      for (var i = 0; i < index; i++) {
        current = current.next;
      }
      if(this.length != 0) {
        beforeNodeToInsert = current.prev;
        beforeNodeToInsert.next = newNode;
        current = newNode;
      } else {
        beforeNodeToInsert = null;
      }
      newNode.prev = beforeNodeToInsert;
      newNode.next = current;
      this.length++;

      return this;
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

      return this;
    }

    deleteAt(index) {
      var current = this._head;
      if(this.length == 0 || index > this.length) {
        return 'Error';
      }
      for (var i = 0; i < index; i++) {
        current = current.next;
      }
      var beforeNodeToDelete = current.prev;
      var afterNodeToDelete = current.next;
      if(beforeNodeToDelete != null) {
        beforeNodeToDelete.next = afterNodeToDelete;
      }
      if(afterNodeToDelete != null) {
        afterNodeToDelete.prev = beforeNodeToDelete;
      }
      this.length--;

      return this;
    }

    reverse() {
      var current = this._head;
      var temp = null;
      for (var i = 0; i < this.length; i++) {
        temp = current.next;
        current.next = current.prev;
        current.prev = temp;
        current = temp;
      }
      temp = this._head;
      this._head = this._tail;
      this._tail = temp;

      return this;
    }

    indexOf(data) {
      var current = this._head;
      for (var i = 0; i < this.length; i++) {
        if (data == current.data) {
          return i;
        }
        current = current.next;
      }
      return -1;
    }
}

module.exports = LinkedList;
