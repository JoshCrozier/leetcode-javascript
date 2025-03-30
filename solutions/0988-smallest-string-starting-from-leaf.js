/**
 * 988. Smallest String Starting From Leaf
 * https://leetcode.com/problems/smallest-string-starting-from-leaf/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree where each node has a value in the range [0, 25]
 * representing the letters 'a' to 'z'.
 *
 * Return the lexicographically smallest string that starts at a leaf of this tree and ends
 * at the root.
 *
 * As a reminder, any shorter prefix of a string is lexicographically smaller.
 *
 * For example, "ab" is lexicographically smaller than "aba".
 *
 * A leaf of a node is a node that has no children.
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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  let result = null;
  traverse(root, []);
  return result || '';

  function traverse(node, path) {
    if (!node) return;

    path.unshift(String.fromCharCode(node.val + 97));

    if (!node.left && !node.right) {
      const current = path.join('');
      if (!result || current < result) {
        result = current;
      }
    }

    traverse(node.left, path);
    traverse(node.right, path);
    path.shift();
  }
};
