/**
 * 1373. Maximum Sum BST in Binary Tree
 * https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/
 * Difficulty: Hard
 *
 * Given a binary tree root, return the maximum sum of all keys of any sub-tree which is also a
 * Binary Search Tree (BST).
 *
 * Assume a BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
  let result = 0;
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return { isBST: true, min: Infinity, max: -Infinity, sum: 0 };

    const left = traverse(node.left);
    const right = traverse(node.right);

    if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
      const currentSum = node.val + left.sum + right.sum;
      result = Math.max(result, currentSum);
      return {
        isBST: true,
        min: Math.min(node.val, left.min),
        max: Math.max(node.val, right.max),
        sum: currentSum
      };
    }

    return { isBST: false, min: 0, max: 0, sum: 0 };
  }
};
