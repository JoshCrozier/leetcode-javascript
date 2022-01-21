/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 * Difficulty: Medium
 *
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let list1 = head;
  let list2 = head;

  while (list2.next && list2.next.next) {
    list1 = list1.next;
    list2 = list2.next.next;
  }

  let center1 = list1;
  let center2 = list1.next;
  while (center2.next) {
    const temp = center2.next;
    center2.next = temp.next;
    temp.next = center1.next;
    center1.next = temp;
  }

  list1 = head;
  list2 = center1.next;
  while (list1 != center1) {
    center1.next = list2.next;
    list2.next = list1.next;
    list1.next = list2;
    list1 = list2.next;
    list2 = center1.next;
  }
};
