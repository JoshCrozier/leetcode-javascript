/**
 * 2583. Kth Largest Sum in a Binary Tree
 * https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree and a positive integer k.
 *
 * The level sum in the tree is the sum of the values of the nodes that are on the same level.
 *
 * Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer
 * than k levels in the tree, return -1.
 *
 * Note that two nodes are on the same level if they have the same distance from the root.
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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  const levelSums = [];
  const queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    let levelSum = 0;

    while (levelSize--) {
      const node = queue.shift();
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelSums.push(levelSum);
  }

  if (levelSums.length < k) return -1;

  return levelSums.sort((a, b) => b - a)[k - 1];
};
