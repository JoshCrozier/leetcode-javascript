/**
 * 1669. Merge In Between Linked Lists
 * https://leetcode.com/problems/merge-in-between-linked-lists/
 * Difficulty: Medium
 *
 * You are given two linked lists: list1 and list2 of sizes n and m respectively.
 *
 * Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
 *
 * The blue edges and nodes in the following figure indicate the result:
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  const result = new ListNode(0, list1);

  for (let i = 1; i < a; i++) {
    list1 = list1.next;
  }
  let tail = list1.next;
  list1.next = list2;
  for (let i = a; i < b; i++) {
    tail = tail.next;
  }
  while (list1 && list1.next) {
    list1 = list1.next;
  }
  list1.next = tail.next;

  return result.next;
};
