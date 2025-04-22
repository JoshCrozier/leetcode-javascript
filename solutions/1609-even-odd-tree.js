/**
 * 1609. Even Odd Tree
 * https://leetcode.com/problems/even-odd-tree/
 * Difficulty: Medium
 *
 * A binary tree is named Even-Odd if it meets the following conditions:
 * - The root of the binary tree is at level index 0, its children are at level index 1, their
 *   children are at level index 2, etc.
 * - For every even-indexed level, all nodes at the level have odd integer values in strictly
 *   increasing order (from left to right).
 * - For every odd-indexed level, all nodes at the level have even integer values in strictly
 *   decreasing order (from left to right).
 *
 * Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise
 * return false.
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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  let queue = [root];
  let level = 0;

  while (queue.length) {
    const levelSize = queue.length;
    let prevValue = level % 2 === 0 ? -Infinity : Infinity;
    const newQueue = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[i];
      const isEvenLevel = level % 2 === 0;
      const isOddValue = node.val % 2 === 1;

      if (isEvenLevel && (!isOddValue || node.val <= prevValue)) return false;
      if (!isEvenLevel && (isOddValue || node.val >= prevValue)) return false;

      prevValue = node.val;
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }

    queue = newQueue;
    level++;
  }

  return true;
};
