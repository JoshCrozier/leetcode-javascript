/**
 * 445. Add Two Numbers II
 * https://leetcode.com/problems/add-two-numbers-ii/
 * Difficulty: Medium
 *
 * You are given two non-empty linked lists representing two non-negative integers. The most
 * significant digit comes first and each of their nodes contains a single digit. Add the two
 * numbers and return the sum as a linked list.
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
  const s1 = [];
  const s2 = [];
  let carry = 0;
  let head = null;

  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  while (s1.length || s2.length || carry) {
    const sum = (s1.pop() || 0) + (s2.pop() || 0) + carry;
    carry = sum / 10 | 0;
    head = Object.assign(new ListNode(sum % 10), { next: head });
  }

  return head;
};
