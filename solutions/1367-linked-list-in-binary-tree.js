/**
 * 1367. Linked List in Binary Tree
 * https://leetcode.com/problems/linked-list-in-binary-tree/
 * Difficulty: Medium
 *
 * Given a binary tree root and a linked list with head as the first node.
 *
 * Return True if all the elements in the linked list starting from the head correspond to some
 * downward path connected in the binary tree otherwise return False.
 *
 * In this context downward path means a path that starts at some node and goes downwards.
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  if (!head) return true;
  if (!root) return false;
  return checkPath(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);

  function checkPath(listNode, treeNode) {
    if (!listNode) return true;
    if (!treeNode) return false;
    if (listNode.val !== treeNode.val) return false;
    return checkPath(listNode.next, treeNode.left) || checkPath(listNode.next, treeNode.right);
  }
};
