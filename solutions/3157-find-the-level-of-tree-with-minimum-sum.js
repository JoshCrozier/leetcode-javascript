/**
 * 3157. Find the Level of Tree with Minimum Sum
 * https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/
 * Difficulty: Medium
 *
 * Given the root of a binary tree root where each node has a value, return the level of the
 * tree that has the minimum sum of values among all the levels (in case of a tie, return the
 * lowest level).
 *
 * Note that the root of the tree is at level 1 and the level of any other node is its distance
 * from the root + 1.
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
var minimumLevel = function(root) {
  if (!root) return 1;

  const queue = [root];
  let currentLevel = 1;
  let minSum = Infinity;
  let result = 1;

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum < minSum) {
      minSum = levelSum;
      result = currentLevel;
    }

    currentLevel++;
  }

  return result;
};
