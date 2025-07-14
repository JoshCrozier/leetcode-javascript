/**
 * 2792. Count Nodes That Are Great Enough
 * https://leetcode.com/problems/count-nodes-that-are-great-enough/
 * Difficulty: Hard
 *
 * You are given a root to a binary tree and an integer k. A node of this tree is called great
 * enough if the followings hold:
 * - Its subtree has at least k nodes.
 * - Its value is greater than the value of at least k nodes in its subtree.
 *
 * Return the number of nodes in this tree that are great enough.
 *
 * The node u is in the subtree of the node v, if u == v or v is an ancestor of u.
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
 * @param {number} k
 * @return {number}
 */
var countGreatEnoughNodes = function(root, k) {
  let result = 0;

  dfs(root);

  return result;

  function dfs(node) {
    if (!node) return [];

    const leftValues = dfs(node.left);
    const rightValues = dfs(node.right);
    const combined = [...leftValues, ...rightValues].sort((a, b) => a - b).slice(0, k);

    if (combined.length >= k && combined[k - 1] < node.val) {
      result++;
    } else {
      combined.push(node.val);
    }

    return combined;
  }
};
