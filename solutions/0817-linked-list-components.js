/**
 * 817. Linked List Components
 * https://leetcode.com/problems/linked-list-components/
 * Difficulty: Medium
 *
 * You are given the head of a linked list containing unique integer values and an integer array
 * nums that is a subset of the linked list values.
 *
 * Return the number of connected components in nums where two values are connected if they appear
 * consecutively in the linked list.
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
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  const numSet = new Set(nums);
  let componentCount = 0;
  let inComponent = false;

  let current = head;
  while (current) {
    if (numSet.has(current.val)) {
      if (!inComponent) {
        componentCount++;
        inComponent = true;
      }
    } else {
      inComponent = false;
    }
    current = current.next;
  }

  return componentCount;
};
