/**
 * 958. Check Completeness of a Binary Tree
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, determine if it is a complete binary tree.
 *
 * In a complete binary tree, every level, except possibly the last, is completely filled, and
 * all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes
 * inclusive at the last level h.
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
var isCompleteTree = function(root) {
  const queue = [root];
  let foundNull = false;

  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      foundNull = true;
      continue;
    }
    if (foundNull) return false;
    queue.push(node.left);
    queue.push(node.right);
  }

  return true;
};
