/**
 * 3294. Convert Doubly Linked List to Array II
 * https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/
 * Difficulty: Medium
 *
 * You are given an arbitrary node from a doubly linked list, which contains nodes that
 * have a next pointer and a previous pointer.
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
 * @param {_Node} node
 * @return {number[]}
 */
var toArray = function(node) {
  const result = [];
  let headNode = node;

  while (headNode.prev) {
    headNode = headNode.prev;
  }

  let currentNode = headNode;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return result;
};
