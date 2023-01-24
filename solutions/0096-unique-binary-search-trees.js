/**
 * 96. Unique Binary Search Trees
 * https://leetcode.com/problems/unique-binary-search-trees/
 * Difficulty: Medium
 *
 * Given an integer n, return the number of structurally unique BST's (binary
 * search trees) which has exactly n nodes of unique values from 1 to n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  return traverse(2 * n) / (traverse(n + 1) * traverse(n));
};

function traverse(n) {
  return n <= 0 ? 1 : n * traverse(n - 1);
}
