/**
 * 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Difficulty: Hard
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const map = new Map();
  for (let list of lists) {
    while (list) {
      map.set(list.val, (map.get(list.val) || 0) + 1);
      list = list.next;
    }
  }
  const sorted = [...map].sort(([a], [b]) => a - b);
  const result = new ListNode();
  let tail = result;

  for (let [key, value] of sorted) {
    while (value--) {
      tail.next = new ListNode(key);
      tail = tail.next;
    }
  }

  return result.next;
};
