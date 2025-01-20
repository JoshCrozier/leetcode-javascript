/**
 * 92. Reverse Linked List II
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * Difficulty: Medium
 *
 * Given the head of a singly linked list and two integers left and right where
 * left <= right, reverse the nodes of the list from position left to position
 * right, and return the reversed list.
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const result = new ListNode(0, head);
  let previous = result;
  let currentIndex = 1;

  while (currentIndex++ < left) {
    previous = previous.next;
  }

  const tail = previous.next;
  while (left++ < right) {
    const next = tail.next;
    tail.next = next.next;
    next.next = previous.next;
    previous.next = next;
  }

  return result.next;
};
