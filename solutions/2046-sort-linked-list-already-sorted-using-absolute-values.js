/**
 * 2046. Sort Linked List Already Sorted Using Absolute Values
 * https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/
 * Difficulty: Medium
 *
 * Given the head of a singly linked list that is sorted in non-decreasing order using the
 * absolute values of its nodes, return the list sorted in non-decreasing order using the
 * actual values of its nodes.
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
 * @return {ListNode}
 */
var sortLinkedList = function(head) {
  if (!head || !head.next) return head;

  let current = head.next;
  let prev = head;

  while (current) {
    if (current.val < 0) {
      const next = current.next;
      prev.next = next;
      current.next = head;
      head = current;
      current = next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
};
