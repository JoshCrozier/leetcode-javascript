/**
 * 109. Convert Sorted List to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * Difficulty: Medium
 *
 * Given the head of a singly linked list where elements are sorted in ascending order,
 * convert it to a height-balanced binary search tree.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  let fast = head;
  let slow = head;
  let previous = head;
  while (fast && fast.next) {
    previous = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  const root = new TreeNode(slow.val);
  previous.next = null;

  const newHead = slow.next;
  slow.next = null;

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(newHead);

  return root;
};
