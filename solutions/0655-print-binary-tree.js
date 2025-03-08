/**
 * 655. Print Binary Tree
 * https://leetcode.com/problems/print-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, construct a 0-indexed m x n string matrix res that represents
 * a formatted layout of the tree. The formatted layout matrix should be constructed using the
 * following rules:
 * - The height of the tree is height and the number of rows m should be equal to height + 1.
 * - The number of columns n should be equal to 2height+1 - 1.
 * - Place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2]).
 * - For each node that has been placed in the matrix at position res[r][c], place its left child at
 *   res[r+1][c-2height-r-1] and its right child at res[r+1][c+2height-r-1].
 * - Continue this process until all the nodes in the tree have been placed.
 * - Any empty cells should contain the empty string "".
 *
 * Return the constructed matrix res.
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
 * @return {string[][]}
 */
var printTree = function(root) {
  const height = getHeight(root);
  const columns = Math.pow(2, height + 1) - 1;
  const result = new Array(height + 1).fill().map(() => {
    return new Array(columns).fill('');
  });

  fill(root, 0, Math.floor((columns - 1) / 2), height);

  return result;

  function fill(node, r, c, h) {
    if (!node) return;
    result[r][c] = node.val.toString();
    fill(node.left, r + 1, c - Math.pow(2, h - r - 1), h);
    fill(node.right, r + 1, c + Math.pow(2, h - r - 1), h);
  }

  function getHeight(node) {
    if (!node) return -1;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }
};
