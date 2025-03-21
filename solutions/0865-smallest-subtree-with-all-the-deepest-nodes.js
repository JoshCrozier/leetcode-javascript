/**
 * 865. Smallest Subtree with all the Deepest Nodes
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, the depth of each node is the shortest distance to the root.
 *
 * Return the smallest subtree such that it contains all the deepest nodes in the original tree.
 *
 * A node is called the deepest if it has the largest depth possible among any node in the entire
 * tree.
 *
 * The subtree of a node is a tree consisting of that node, plus the set of all descendants of
 * that node.
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
var subtreeWithAllDeepest = function(root) {
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
