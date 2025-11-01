/**
 * 3217. Delete Nodes From Linked List Present in Array
 * https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/
 * Difficulty: Medium
 *
 * You are given an array of integers nums and the head of a linked list. Return the head
 * of the modified linked list after removing all nodes from the linked list that have
 * a value that exists in nums.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
  const set = new Set(nums);
  const temp = new ListNode(0, head);
  let current = temp;

  while (current.next) {
    if (set.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return temp.next;
};
