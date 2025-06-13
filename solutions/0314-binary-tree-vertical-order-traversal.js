/**
 * 314. Binary Tree Vertical Order Traversal
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the vertical order traversal of its nodes' values.
 * (i.e., from top to bottom, column by column).
 *
 * If two nodes are in the same row and column, the order should be from left to right.
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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (!root) return [];

  const columns = new Map();
  const queue = [[root, 0]];
  let minCol = 0;
  let maxCol = 0;

  while (queue.length) {
    const [node, col] = queue.shift();
    if (!columns.has(col)) columns.set(col, []);
    columns.get(col).push(node.val);

    if (node.left) {
      queue.push([node.left, col - 1]);
      minCol = Math.min(minCol, col - 1);
    }
    if (node.right) {
      queue.push([node.right, col + 1]);
      maxCol = Math.max(maxCol, col + 1);
    }
  }

  const result = [];
  for (let col = minCol; col <= maxCol; col++) {
    if (columns.has(col)) result.push(columns.get(col));
  }

  return result;
};
