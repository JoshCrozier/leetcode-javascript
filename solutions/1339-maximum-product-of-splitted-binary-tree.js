/**
 * 1339. Maximum Product of Splitted Binary Tree
 * https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, split the binary tree into two subtrees by removing one edge
 * such that the product of the sums of the subtrees is maximized.
 *
 * Return the maximum product of the sums of the two subtrees. Since the answer may be too large,
 * return it modulo 109 + 7.
 *
 * Note that you need to maximize the answer before taking the mod and not after taking it.
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
var maxProduct = function(root) {
  const sums = [];
  const MOD = 1e9 + 7;
  const total = calculateSum(root);
  let maxProd = 0;

  for (const sum of sums) {
    maxProd = Math.max(maxProd, sum * (total - sum));
  }

  return maxProd % MOD;

  function calculateSum(node) {
    if (!node) return 0;
    const leftSum = calculateSum(node.left);
    const rightSum = calculateSum(node.right);
    const totalSum = node.val + leftSum + rightSum;
    sums.push(totalSum);
    return totalSum;
  }
};
