/**
 * 2471. Minimum Number of Operations to Sort a Binary Tree by Level
 * https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree with unique values.
 *
 * In one operation, you can choose any two nodes at the same level and swap their values.
 *
 * Return the minimum number of operations needed to make the values at each level sorted in a
 * strictly increasing order.
 *
 * The level of a node is the number of edges along the path between it and the root node.
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
var minimumOperations = function(root) {
  let result = 0;
  const queue = [root];
  const levelValues = [];

  while (queue.length) {
    const levelSize = queue.length;
    const values = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelValues.push(values);
  }

  for (const values of levelValues) {
    const sorted = [...values].sort((a, b) => a - b);
    const indexMap = new Map(values.map((val, i) => [val, i]));
    let swaps = 0;

    for (let i = 0; i < values.length; i++) {
      if (values[i] !== sorted[i]) {
        const targetIndex = indexMap.get(sorted[i]);
        [values[i], values[targetIndex]] = [values[targetIndex], values[i]];
        indexMap.set(values[targetIndex], targetIndex);
        indexMap.set(values[i], i);
        swaps++;
      }
    }

    result += swaps;
  }

  return result;
};
