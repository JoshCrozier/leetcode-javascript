/**
 * 1602. Find Nearest Right Node in Binary Tree
 * https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree and a node u in the tree, return the nearest node on the
 * same level that is to the right of u, or return null if u is the rightmost node in its level.
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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode === u) {
        return i === levelSize - 1 ? null : queue.shift();
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return null;
};
