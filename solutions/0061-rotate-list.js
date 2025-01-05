/**
 * 61. Rotate List
 * https://leetcode.com/problems/rotate-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list, rotate the list to the right by k places.
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
var rotateRight = function(head, k) {
  if (!head || !head.next || !k) return head;
  let tailCopy = head;
  let tail = head;
  let count = 1;
  while (tail.next) {
    tail = tail.next;
    count++;
  }
  tail.next = head;
  for (let i = 1; i < count - k % count; i++) {
    tailCopy = tailCopy.next;
  }
  const result = tailCopy.next;
  tailCopy.next = null;
  return result;
};
