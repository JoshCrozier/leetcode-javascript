/**
 * 95. Unique Binary Search Trees II
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 * Difficulty: Medium
 *
 * Given an integer n, return all the structurally unique BST's (binary search
 * trees), which has exactly n nodes of unique values from 1 to n. Return the
 * answer in any order.
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  return backtrack(n);
};

function backtrack(n, j = 1, k = n, result = []) {
  for (let index = j; index <= k; index++) {
    for (const left of backtrack(n, j, index - 1)) {
      for (const right of backtrack(n, index + 1, k)) {
        result.push({ val: index, left, right });
      }
    }
  }

  return n ? result.length ? result : [null] : [];
}
