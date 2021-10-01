/**
 * 237. Delete Node in a Linked List
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * Difficulty: Easy
 *
 * Write a function to delete a node in a singly-linked list. You will not be
 * given access to the head of the list, instead you will be given access to
 * the node to be deleted directly.
 *
 * It is guaranteed that the node to be deleted is not a tail node in the list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
