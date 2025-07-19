/**
 * 3263. Convert Doubly Linked List to Array I
 * https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/
 * Difficulty: Easy
 *
 * You are given the head of a doubly linked list, which contains nodes that have a next
 * pointer and a previous pointer.
 *
 * Return an integer array which contains the elements of the linked list in order.
 */

/**
 * // Definition for a _Node.
 * function _Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 * };
 */
/**
 * @param {_Node} head
 * @return {number[]}
 */
var toArray = function(head) {
  const result = [];
  let currentNode = head;

  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return result;
};
