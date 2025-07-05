/**
 * 1836. Remove Duplicates From an Unsorted Linked List
 * https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list, find all the values that appear more than once in the list
 * and delete the nodes that have any of those values.
 *
 * Return the linked list after the deletions.
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
var deleteDuplicatesUnsorted = function(head) {
  const map = new Map();
  let current = head;

  while (current) {
    map.set(current.val, (map.get(current.val) || 0) + 1);
    current = current.next;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  let previous = dummy;
  current = head;

  while (current) {
    if (map.get(current.val) > 1) {
      previous.next = current.next;
    } else {
      previous = current;
    }
    current = current.next;
  }

  return dummy.next;
};
