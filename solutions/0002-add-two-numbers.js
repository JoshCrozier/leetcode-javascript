/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 * Difficulty: Medium
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single
 * digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode();
  let tail = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1 + v2 + carry;

    tail.next = new ListNode(v % 10);
    tail = tail.next;
    carry = v >= 10 ? 1 : 0;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return result.next;
};
