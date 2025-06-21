/**
 * 663. Equal Tree Partition
 * https://leetcode.com/problems/equal-tree-partition/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return true if you can partition the tree into two trees
 * with equal sums of values after removing exactly one edge on the original tree.
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
var checkEqualTree = function(root) {
  const subtreeSums = new Set();
  const totalSum = calculateSum(root);

  return totalSum % 2 === 0 && subtreeSums.has(totalSum / 2);

  function calculateSum(node) {
    if (!node) return 0;

    const leftSum = calculateSum(node.left);
    const rightSum = calculateSum(node.right);
    const currentSum = node.val + leftSum + rightSum;

    if (node !== root) {
      subtreeSums.add(currentSum);
    }

    return currentSum;
  }
};
