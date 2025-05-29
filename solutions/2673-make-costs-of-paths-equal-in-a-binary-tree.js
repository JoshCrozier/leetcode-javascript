/**
 * 2673. Make Costs of Paths Equal in a Binary Tree
 * https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/
 * Difficulty: Medium
 *
 * You are given an integer n representing the number of nodes in a perfect binary tree consisting
 * of nodes numbered from 1 to n. The root of the tree is node 1 and each node i in the tree has
 * two children where the left child is the node 2 * i and the right child is 2 * i + 1.
 *
 * Each node in the tree also has a cost represented by a given 0-indexed integer array cost of
 * size n where cost[i] is the cost of node i + 1. You are allowed to increment the cost of any
 * node by 1 any number of times.
 *
 * Return the minimum number of increments you need to make the cost of paths from the root to
 * each leaf node equal.
 *
 * Note:
 * - A perfect binary tree is a tree where each node, except the leaf nodes, has exactly 2 children.
 * - The cost of a path is the sum of costs of nodes in the path.
 */

/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
  let result = 0;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && right < n) {
      const maxChildCost = Math.max(cost[left], cost[right]);
      result += maxChildCost - cost[left] + maxChildCost - cost[right];
      cost[i] += maxChildCost;
    }
  }

  return result;
};
