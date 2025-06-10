class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 1- ** Pushing - add a node to the last
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //2- ** Pop - remove the last node

  pop() {
    if (this.length === 0) return undefined;
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }

    this.length--;
    return node;
  }

  // 2- **Shift - remove node from the beginning
  shift() {
    if (this.length === 0) return undefined;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }

  // 3- **Unshift - add a node a the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 4-**Get - Accessing a node in double linked list by its position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, count;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // 5- **Set - replacing the value of a node to the
  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  //6- **Insert - Adding a node in a certain position

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let next = prev.next;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = next;
    this.length++;
    return true;
  }

  //6- **Remove - Removing a node by a certain position

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let node = this.get(index);
    let prev = node.prev;
    let next = node.next;    
    prev.next = next;
    next.prev = prev;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }
}

const list = new DoublyLinkedList();

list.push("Hey");
list.push("there");
list.push("!");
