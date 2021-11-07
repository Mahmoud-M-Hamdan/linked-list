'use strict';

const Node = require('./Node');


class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * A function that will append a node to the end of the linkedList
   *
   * @param {any} value
   */
  insert(value) {
    // Algorithm
    // create a new node
    const newNode = new Node(value);

    // check if the linked list is empty
    if (!this.head) {
      // if empty, point that linked list to be the head of the linked list
      this.head = newNode; // make the newly created node our first node in our Linked List
      return this; // return the linkedList
    }

    // if its not empty then you need to find the last node, or the node that the next value is null.
    let currentNode = this.head; //this will be our pointer, indicator while we ware traversing through the linked List
    // traverse the Linked list and  find the node that the next value of it is null (traversing)
    while (currentNode.next) { // while the next node is not empty, make the current node move to th next node
      currentNode = currentNode.next;
    }
    // once found, link that node to the newly created node
    currentNode.next = newNode;

    // return the LinkedList
    return this;
  }

  includes(value) {
    if (!this.head) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let laststring = '';
    let string = this.head;
    while (string) {
      laststring += `{ ${string.value} } -> `;
      string = string.next;
    }
    laststring += `NULL`;
    return laststring;
  }

}


module.exports = LinkedList;
