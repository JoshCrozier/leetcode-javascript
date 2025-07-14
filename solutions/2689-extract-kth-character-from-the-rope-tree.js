/**
 * 2689. Extract Kth Character From The Rope Tree
 * https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/
 * Difficulty: Easy
 *
 * You are given the root of a binary tree and an integer k. Besides the left and right children,
 * every node of this tree has two other properties, a string node.val containing only lowercase
 * English letters (possibly empty) and a non-negative integer node.len. There are two types of
 * nodes in this tree:
 * - Leaf: These nodes have no children, node.len = 0, and node.val is some non-empty string.
 * - Internal: These nodes have at least one child (also at most two children), node.len > 0,
 *   and node.val is an empty string.
 *
 * The tree described above is called a Rope binary tree. Now we define S[node] recursively
 * as follows:
 * - If node is some leaf node, S[node] = node.val,
 * - Otherwise if node is some internal node, S[node] = concat(S[node.left], S[node.right])
 *   and S[node].length = node.len.
 *
 * Return k-th character of the string S[root].
 *
 * Note: If s and p are two strings, concat(s, p) is a string obtained by concatenating p to s.
 * For example, concat("ab", "zz") = "abzz".
 */

/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function(root, k) {
  if (!root.left && !root.right) {
    return root.val[k - 1];
  }

  const leftLength = getSubtreeLength(root.left);

  if (k <= leftLength) {
    return getKthCharacter(root.left, k);
  } else {
    return getKthCharacter(root.right, k - leftLength);
  }

  function getSubtreeLength(node) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return node.val.length;
    }
    return node.len;
  }
};
