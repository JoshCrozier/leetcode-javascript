/**
 * 1973. Count Nodes Equal to Sum of Descendants
 * https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the number of nodes where the value of the node is
 * equal to the sum of the values of its descendants.
 *
 * A descendant of a node x is any node that is on the path from node x to some leaf node. The
 * sum is considered to be 0 if the node has no descendants.
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
var equalToDescendants = function(root) {
  let count = 0;
  dfs(root);
  return count;

  function dfs(node) {
    if (!node) return 0;

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    const descendantSum = leftSum + rightSum;

    if (node.val === descendantSum) {
      count++;
    }

    return node.val + descendantSum;
  }
};
