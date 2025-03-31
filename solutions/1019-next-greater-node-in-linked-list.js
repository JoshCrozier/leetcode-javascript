/**
 * 1019. Next Greater Node In Linked List
 * https://leetcode.com/problems/next-greater-node-in-linked-list/
 * Difficulty: Medium
 *
 * You are given the head of a linked list with n nodes.
 *
 * For each node in the list, find the value of the next greater node. That is, for each node,
 * find the value of the first node that is next to it and has a strictly larger value than it.
 *
 * Return an integer array answer where answer[i] is the value of the next greater node of the
 * ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.
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
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  const result = new Array(values.length).fill(0);
  const stack = [];

  for (let i = 0; i < values.length; i++) {
    while (stack.length && values[stack[stack.length - 1]] < values[i]) {
      result[stack.pop()] = values[i];
    }
    stack.push(i);
  }

  return result;
};
