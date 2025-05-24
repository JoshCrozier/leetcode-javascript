/**
 * 2487. Remove Nodes From Linked List
 * https://leetcode.com/problems/remove-nodes-from-linked-list/
 * Difficulty: Medium
 *
 * You are given the head of a linked list.
 *
 * Remove every node which has a node with a greater value anywhere to the right side of it.
 *
 * Return the head of the modified linked list.
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
var removeNodes = function(head) {
  const stack = [];
  let current = head;

  while (current) {
    while (stack.length && stack[stack.length - 1].val < current.val) {
      stack.pop();
    }
    stack.push(current);
    current = current.next;
  }

  let result = null;
  while (stack.length) {
    current = stack.pop();
    current.next = result;
    result = current;
  }

  return result;
};
