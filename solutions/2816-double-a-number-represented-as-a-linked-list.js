/**
 * 2816. Double a Number Represented as a Linked List
 * https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
 * Difficulty: Medium
 *
 * You are given the head of a non-empty linked list representing a non-negative integer without
 * leading zeroes.
 *
 * Return the head of the linked list after doubling it.
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
var doubleIt = function(head) {
  const reversed = reverseList(head);
  let carry = 0;
  let current = reversed;
  let prev = null;

  while (current) {
    const doubled = current.val * 2 + carry;
    current.val = doubled % 10;
    carry = Math.floor(doubled / 10);
    prev = current;
    current = current.next;
  }

  if (carry) {
    prev.next = new ListNode(carry);
  }

  return reverseList(reversed);

  function reverseList(node) {
    let prev = null;
    let current = node;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
};
