/**
 * 2458. Height of Binary Tree After Subtree Removal Queries
 * https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/
 * Difficulty: Hard
 *
 * You are given the root of a binary tree with n nodes. Each node is assigned a unique value
 * from 1 to n. You are also given an array queries of size m.
 *
 * You have to perform m independent queries on the tree where in the ith query you do the
 * following:
 * - Remove the subtree rooted at the node with the value queries[i] from the tree. It is
 *   guaranteed that queries[i] will not be equal to the value of the root.
 *
 * Return an array answer of size m where answer[i] is the height of the tree after performing
 * the ith query.
 *
 * Note:
 * - The queries are independent, so the tree returns to its initial state after each query.
 * - The height of a tree is the number of edges in the longest simple path from the root to
 *   some node in the tree.
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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
  const heights = new Map();
  const maxHeightWithout = new Map();

  computeHeight(root);
  computeMaxHeight(root, 0, -1);

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    result[i] = maxHeightWithout.get(queries[i]);
  }

  return result;

  function computeHeight(node) {
    if (!node) return -1;
    const leftHeight = computeHeight(node.left);
    const rightHeight = computeHeight(node.right);
    heights.set(node.val, Math.max(leftHeight, rightHeight) + 1);
    return heights.get(node.val);
  }

  function computeMaxHeight(node, depth, cousinHeight) {
    if (!node) return;
    const leftHeight = node.left ? heights.get(node.left.val) : -1;
    const rightHeight = node.right ? heights.get(node.right.val) : -1;
    const maxAlternative = Math.max(cousinHeight, depth - 1);
    maxHeightWithout.set(node.val, maxAlternative);

    computeMaxHeight(node.left, depth + 1, Math.max(cousinHeight, rightHeight + depth + 1));
    computeMaxHeight(node.right, depth + 1, Math.max(cousinHeight, leftHeight + depth + 1));
  }
};
