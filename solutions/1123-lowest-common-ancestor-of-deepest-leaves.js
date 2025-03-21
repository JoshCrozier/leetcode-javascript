/**
 * 1123. Lowest Common Ancestor of Deepest Leaves
 * https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.
 *
 * Recall that:
 * - The node of a binary tree is a leaf if and only if it has no children
 * - The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of
 *   its children is d + 1.
 * - The lowest common ancestor of a set S of nodes, is the node A with the largest depth such
 *   that every node in S is in the subtree with root A.
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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  return findDepthAndNode(root).node;

  function findDepthAndNode(node) {
    if (!node) return { depth: 0, node: null };

    const left = findDepthAndNode(node.left);
    const right = findDepthAndNode(node.right);

    if (left.depth === right.depth) {
      return { depth: left.depth + 1, node: node };
    }

    const deeper = left.depth > right.depth ? left : right;
    return { depth: deeper.depth + 1, node: deeper.node };
  }
};
