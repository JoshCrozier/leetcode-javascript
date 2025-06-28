/**
 * 1120. Maximum Average Subtree
 * https://leetcode.com/problems/maximum-average-subtree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the maximum average value of a subtree of that tree.
 * Answers within 10-5 of the actual answer will be accepted.
 *
 * A subtree of a tree is any node of that tree plus all its descendants.
 *
 * The average value of a tree is the sum of its values, divided by the number of nodes.
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
var maximumAverageSubtree = function(root) {
  let maxAverage = 0;
  calculateSubtree(root);
  return maxAverage;

  function calculateSubtree(node) {
    if (!node) return [0, 0];

    const [leftSum, leftCount] = calculateSubtree(node.left);
    const [rightSum, rightCount] = calculateSubtree(node.right);
    const totalSum = leftSum + rightSum + node.val;
    const totalCount = leftCount + rightCount + 1;
    const currentAverage = totalSum / totalCount;

    maxAverage = Math.max(maxAverage, currentAverage);

    return [totalSum, totalCount];
  }
};
