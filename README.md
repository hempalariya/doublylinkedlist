# Doubly Linked List (JavaScript)

This project implements a Doubly Linked List data structure in JavaScript. Each node contains a val, a pointer to the next node, and a pointer to the prev node, allowing bidirectional traversal.
## Features

    push(val) – Adds a node to the end.

    pop() – Removes the last node.

    shift() – Removes the first node.

    unshift(val) – Adds a node to the beginning.

    get(index) – Retrieves the node at a specific index.

    set(index, val) – Updates the value of a node at a given index.

    insert(index, val) – Inserts a new node at a specific index.

    remove(index) – Removes a node from a specific index.

## Example Usage

const list = new DoublyLinkedList();

list.push("Hey");
list.push("there");
list.push("!");

console.log(list.get(1).val); // Output: "there"
list.set(2, "world");
console.log(list.pop().val);  // Output: "world"

## Structure

    Node: Class representing each node (value, next, and prev)

    DoublyLinkedList: Class with all the core methods

## Notes

    Time complexity for operations like push, pop, shift, unshift is O(1).

    Random access via get() is optimized using a bidirectional traversal approach.
