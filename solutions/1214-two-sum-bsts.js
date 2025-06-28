/**
 * 1214. Two Sum BSTs
 * https://leetcode.com/problems/two-sum-bsts/
 * Difficulty: Medium
 *
 * Given the roots of two binary search trees, root1 and root2, return true if and only if
 * there is a node in the first tree and a node in the second tree whose values sum up to
 * a given integer target.
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
  const valuesSet = new Set();
  collectValues(root1);
  return searchForComplement(root2);

  function collectValues(node) {
    if (!node) return;
    valuesSet.add(node.val);
    collectValues(node.left);
    collectValues(node.right);
  }

  function searchForComplement(node) {
    if (!node) return false;

    const complement = target - node.val;
    if (valuesSet.has(complement)) return true;

    return searchForComplement(node.left) || searchForComplement(node.right);
  }
};
