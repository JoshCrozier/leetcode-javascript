/**
 * 1430. Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
 * https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/
 * Difficulty: Medium
 *
 * Given a binary tree where each path going from the root to any leaf form a valid
 * sequence, check if a given string is a valid sequence in such binary tree.
 *
 * We get the given string from the concatenation of an array of integers arr and the
 * concatenation of all values of the nodes along a path results in a sequence in the
 * given binary tree.
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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  return dfs(root, 0);

  function dfs(node, index) {
    if (!node || index >= arr.length || node.val !== arr[index]) {
      return false;
    }

    if (index === arr.length - 1) {
      return !node.left && !node.right;
    }

    return dfs(node.left, index + 1) || dfs(node.right, index + 1);
  }
};
