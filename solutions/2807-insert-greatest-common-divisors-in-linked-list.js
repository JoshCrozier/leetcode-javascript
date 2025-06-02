/**
 * 2807. Insert Greatest Common Divisors in Linked List
 * https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list head, in which each node contains an integer value.
 *
 * Between every pair of adjacent nodes, insert a new node with a value equal to the greatest
 * common divisor of them.
 *
 * Return the linked list after insertion.
 *
 * The greatest common divisor of two numbers is the largest positive integer that evenly
 * divides both numbers.
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
var insertGreatestCommonDivisors = function(head) {
  let current = head;
  while (current && current.next) {
    const nextNode = current.next;
    const divisor = gcd(current.val, nextNode.val);
    current.next = new ListNode(divisor, nextNode);
    current = nextNode;
  }
  return head;

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }
};
