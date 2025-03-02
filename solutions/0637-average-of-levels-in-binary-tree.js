/**
 * 637. Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 * Difficulty: Easy
 *
 * Given the root of a binary tree, return the average value of the nodes on each level in the
 * form of an array. Answers within 10-5 of the actual answer will be accepted.
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = queue.length;
    let sum = 0;

    for (let i = 0; i < level; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(sum / level);
  }

  return result;
};
