/**
 * 666. Path Sum IV
 * https://leetcode.com/problems/path-sum-iv/
 * Difficulty: Medium
 *
 * If the depth of a tree is smaller than 5, then this tree can be represented by an array
 * of three-digit integers. You are given an ascending array nums consisting of three-digit
 * integers representing a binary tree with a depth smaller than 5, where for each integer:
 * - The hundreds digit represents the depth d of this node, where 1 <= d <= 4.
 * - The tens digit represents the position p of this node within its level, where 1 <= p <= 8,
 *   corresponding to its position in a full binary tree.
 * - The units digit represents the value v of this node, where 0 <= v <= 9.
 *
 * Return the sum of all paths from the root towards the leaves.
 *
 * It is guaranteed that the given array represents a valid connected binary tree.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function(nums) {
  const nodeMap = new Map();

  for (const num of nums) {
    const depth = Math.floor(num / 100);
    const position = Math.floor((num % 100) / 10);
    const value = num % 10;
    nodeMap.set(`${depth}-${position}`, value);
  }

  return dfs(1, 1, 0);

  function dfs(depth, position, currentSum) {
    const key = `${depth}-${position}`;
    if (!nodeMap.has(key)) return 0;

    const nodeValue = nodeMap.get(key);
    const pathSum = currentSum + nodeValue;

    const leftChild = `${depth + 1}-${position * 2 - 1}`;
    const rightChild = `${depth + 1}-${position * 2}`;

    if (!nodeMap.has(leftChild) && !nodeMap.has(rightChild)) {
      return pathSum;
    }

    return dfs(depth + 1, position * 2 - 1, pathSum)
      + dfs(depth + 1, position * 2, pathSum);
  }
};
