/**
 * 1457. Pseudo-Palindromic Paths in a Binary Tree
 * https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
 * Difficulty: Medium
 *
 * Given a binary tree where node values are digits from 1 to 9. A path in the binary tree
 * is said to be pseudo-palindromic if at least one permutation of the node values in the
 * path is a palindrome.
 *
 * Return the number of pseudo-palindromic paths going from the root node to leaf nodes.
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
var pseudoPalindromicPaths = function(root) {
  const frequency = new Array(10).fill(0);
  let count = 0;

  traverse(root);

  return count;

  function traverse(node) {
    if (!node) return;

    frequency[node.val]++;

    if (!node.left && !node.right) {
      let oddCount = 0;
      for (let i = 1; i <= 9; i++) {
        if (frequency[i] % 2 !== 0) oddCount++;
      }
      if (oddCount <= 1) count++;
    }

    traverse(node.left);
    traverse(node.right);

    frequency[node.val]--;
  }
};
