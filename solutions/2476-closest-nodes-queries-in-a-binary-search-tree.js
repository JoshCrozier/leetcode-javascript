/**
 * 2476. Closest Nodes Queries in a Binary Search Tree
 * https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/
 * Difficulty: Medium
 *
 * You are given the root of a binary search tree and an array queries of size n consisting of
 * positive integers.
 *
 * Find a 2D array answer of size n where answer[i] = [mini, maxi]:
 * - mini is the largest value in the tree that is smaller than or equal to queries[i]. If a such
 *   value does not exist, add -1 instead.
 * - maxi is the smallest value in the tree that is greater than or equal to queries[i]. If a such
 *   value does not exist, add -1 instead.
 *
 * Return the array answer.
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
 * @return {number[][]}
 */
var closestNodes = function(root, queries) {
  const values = [];

  inorder(root);

  const result = queries.map(query => {
    let minVal = -1;
    let maxVal = -1;

    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid] === query) {
        return [query, query];
      } else if (values[mid] < query) {
        minVal = values[mid];
        left = mid + 1;
      } else {
        maxVal = values[mid];
        right = mid - 1;
      }
    }

    return [minVal, maxVal];
  });

  return result;

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
};
