/**
 * 337. House Robber III
 * https://leetcode.com/problems/house-robber-iii/
 * Difficulty: Medium
 *
 * The thief has found himself a new place for his thievery again. There is only one
 * entrance to this area, called root.
 *
 * Besides the root, each house has one and only one parent house. After a tour, the smart
 * thief realized that all houses in this place form a binary tree. It will automatically
 * contact the police if two directly-linked houses were broken into on the same night.
 *
 * Given the root of the binary tree, return the maximum amount of money the thief can rob
 * without alerting the police.
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
var rob = function(root) {
  return Math.max(...traverse(root));

  function traverse(node) {
    if (!node) return [0, 0];
    const [l1, l2] = traverse(node.left);
    const [r1, r2] = traverse(node.right);
    return [node.val + l2 + r2, Math.max(l1 + r1, l2 + r2, l1 + r2, l2 + r1)];
  }
};
