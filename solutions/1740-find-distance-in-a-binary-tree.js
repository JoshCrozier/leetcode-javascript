/**
 * 1740. Find Distance in a Binary Tree
 * https://leetcode.com/problems/find-distance-in-a-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree and two integers p and q, return the distance between the
 * nodes of value p and value q in the tree.
 *
 * The distance between two nodes is the number of edges on the path from one to the other.
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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function(root, p, q) {
  if (p === q) return 0;

  const lca = findLCA(root);
  const depthP = findDepth(lca, p, 0);
  const depthQ = findDepth(lca, q, 0);

  return depthP + depthQ;

  function findLCA(node) {
    if (!node || node.val === p || node.val === q) return node;

    const leftResult = findLCA(node.left);
    const rightResult = findLCA(node.right);

    if (leftResult && rightResult) return node;
    return leftResult || rightResult;
  }

  function findDepth(node, target, depth) {
    if (!node) return -1;
    if (node.val === target) return depth;

    const leftDepth = findDepth(node.left, target, depth + 1);
    if (leftDepth !== -1) return leftDepth;

    return findDepth(node.right, target, depth + 1);
  }
};
