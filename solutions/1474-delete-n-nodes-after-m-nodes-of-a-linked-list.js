/**
 * 1474. Delete N Nodes After M Nodes of a Linked List
 * https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/
 * Difficulty: Easy
 *
 * You are given the head of a linked list and two integers m and n.
 *
 * Traverse the linked list and remove some nodes in the following way:
 * - Start with the head as the current node.
 * - Keep the first m nodes starting with the current node.
 * - Remove the next n nodes
 * - Keep repeating steps 2 and 3 until you reach the end of the list.
 *
 * Return the head of the modified list after removing the mentioned nodes.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
  let current = head;

  while (current) {
    for (let i = 1; i < m && current; i++) {
      current = current.next;
    }

    if (!current) break;

    let nodeToDelete = current.next;
    for (let i = 0; i < n && nodeToDelete; i++) {
      nodeToDelete = nodeToDelete.next;
    }

    current.next = nodeToDelete;
    current = nodeToDelete;
  }

  return head;
};
