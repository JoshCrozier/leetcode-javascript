/**
 * 148. Sort List
 * https://leetcode.com/problems/sort-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
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
var sortList = function(head) {
  if (!head || !head.next) return head;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const middle = slow.next;
  slow.next = null;
  return mergeList(sortList(head), sortList(middle));
};

function mergeList(a, b) {
  const ordered = new ListNode(-1);
  let list = ordered;

  while (a && b) {
    list.next = a.val < b.val ? a : b;
    list = list.next;
    if (a.val < b.val) {
      a = a.next;
    } else {
      b = b.next;
    }
  }

  list.next = a ?? b;
  return ordered.next;
}
