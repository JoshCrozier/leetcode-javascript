/**
 * 82. Remove Duplicates from Sorted List II
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * Difficulty: Medium
 *
 * Given the head of a sorted linked list, delete all nodes that have duplicate
 * numbers, leaving only distinct numbers from the original list. Return the
 * linked list sorted as well.
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
  let previous = null;
  let tail = result;

  while (head) {
    if (head.val !== head.next?.val && head.val !== previous) {
      tail.next = new ListNode(head.val);
      tail = tail.next;
    }
    previous = head.val;
    head = head.next;
  }

  return result.next;
};
