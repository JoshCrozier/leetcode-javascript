/**
 * 83. Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Difficulty: Easy
 *
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
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
var deleteDuplicates = function(head) {
  const result = new ListNode();
  const set = new Set();
  let tail = result;

  while (head) {
    if (!set.has(head.val)) {
      tail.next = new ListNode(head.val);
      tail = tail.next;
    }

    set.add(head.val);

    head = head.next;
  }

  return result.next;
};
