/**
 * 1721. Swapping Nodes in a Linked List
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 * Difficulty: Medium
 *
 * You are given the head of a linked list, and an integer k.
 *
 * Return the head of the linked list after swapping the values of the kth node from the beginning
 * and the kth node from the end (the list is 1-indexed).
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let firstNode = head;
  for (let i = 1; i < k; i++) {
    firstNode = firstNode.next;
  }

  let slow = head;
  let secondNode = firstNode.next;
  while (secondNode) {
    slow = slow.next;
    secondNode = secondNode.next;
  }

  const temp = firstNode.val;
  firstNode.val = slow.val;
  slow.val = temp;

  return head;
};
