/**
 * 333. Largest BST Subtree
 * https://leetcode.com/problems/largest-bst-subtree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, find the largest subtree, which is also a Binary Search
 * Tree (BST), where the largest means subtree has the largest number of nodes.
 *
 * A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned
 * properties:
 * - The left subtree values are less than the value of their parent (root) node's value.
 * - The right subtree values are greater than the value of their parent (root) node's value.
 *
 * Note: A subtree must include all of its descendants.
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
var largestBSTSubtree = function(root) {
  let maxSize = 0;
  traverse(root);
  return maxSize;

  function traverse(node) {
    if (!node) return { isBST: true, size: 0, min: Infinity, max: -Infinity };

    const left = traverse(node.left);
    const right = traverse(node.right);
    if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
      const size = left.size + right.size + 1;
      maxSize = Math.max(maxSize, size);
      return {
        isBST: true,
        size,
        min: Math.min(left.min, node.val),
        max: Math.max(right.max, node.val)
      };
    }

    return { isBST: false, size: 0, min: 0, max: 0 };
  }
};
