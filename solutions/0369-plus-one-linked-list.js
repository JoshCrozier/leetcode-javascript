/**
 * 369. Plus One Linked List
 * https://leetcode.com/problems/plus-one-linked-list/
 * Difficulty: Medium
 *
 * Given a non-negative integer represented as a linked list of digits, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
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
var plusOne = function(head) {
  const list = new ListNode(0, head);
  let notNine = list;

  while (head) {
    if (head.val !== 9) notNine = head;
    head = head.next;
  }

  notNine.val++;
  notNine = notNine.next;

  while (notNine) {
    notNine.val = 0;
    notNine = notNine.next;
  }

  return list.val === 0 ? list.next : list;
};
