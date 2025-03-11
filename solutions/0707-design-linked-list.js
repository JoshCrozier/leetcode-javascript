/**
 * 707. Design Linked List
 * https://leetcode.com/problems/design-linked-list/
 * Difficulty: Medium
 *
 * Design your implementation of the linked list. You can choose to use a singly or
 * doubly linked list.
 *
 * A node in a singly linked list should have two attributes: val and next. val is the value
 * of the current node, and next is a pointer/reference to the next node.
 *
 * If you want to use the doubly linked list, you will need one more attribute prev to indicate
 * the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 *
 * Implement the MyLinkedList class:
 * - MyLinkedList() Initializes the MyLinkedList object.
 * - int get(int index) Get the value of the indexth node in the linked list. If the
 *   index is invalid, return -1.
 * - void addAtHead(int val) Add a node of value val before the first element of the
 *   linked list. After the insertion, the new node will be the first node of the linked list.
 * - void addAtTail(int val) Append a node of value val as the last element of the linked list.
 * - void addAtIndex(int index, int val) Add a node of value val before the indexth node
 *   in the linked list. If index equals the length of the linked list, the node will be
 *   appended to the end of the linked list. If index is greater than the length, the node
 *   will not be inserted.
 * - void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index
 *   is valid.
 */

var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  while (index--) current = current.next;
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  const node = new Node(val);
  let current = this.head;
  while (--index) current = current.next;
  node.next = current.next;
  current.next = node;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return;
  this.size--;
  if (index === 0) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (--index) current = current.next;
  current.next = current.next.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
