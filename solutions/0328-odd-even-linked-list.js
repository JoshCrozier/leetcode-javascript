/**
 * 328. Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/
 * Difficulty: Medium
 *
 * Given the head of a singly linked list, group all the nodes with odd indices together followed
 * by the nodes with even indices, and return the reordered list.
 *
 * The first node is considered odd, and the second node is even, and so on.
 *
 * Note that the relative order inside both the even and odd groups should remain as it was in
 * the input.
 *
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
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
var oddEvenList = function(head) {
  if (!head) return head;

  const even = head.next;
  let odd = head;

  while (odd.next && odd.next.next) {
    const pointer = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    pointer.next = odd.next;
  }

  odd.next = even;
  return head;
};
