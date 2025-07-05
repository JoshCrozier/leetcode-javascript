/**
 * 1676. Lowest Common Ancestor of a Binary Tree IV
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/
 * Difficulty: Medium
 *
 * Given the root of a binary tree and an array of TreeNode objects nodes, return the lowest common
 * ancestor (LCA) of all the nodes in nodes. All the nodes will exist in the tree, and all values
 * of the tree's nodes are unique.
 *
 * Extending the definition of LCA on Wikipedia: "The lowest common ancestor of n nodes p1,
 * p2, ..., pn in a binary tree T is the lowest node that has every pi as a descendant (where we
 * allow a node to be a descendant of itself) for every valid i". A descendant of a node x is a
 * node y that is on the path from node x to some leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
  const targetSet = new Set(nodes);
  return helper(root);

  function helper(node) {
    if (!node) return null;

    if (targetSet.has(node)) return node;

    const leftResult = helper(node.left);
    const rightResult = helper(node.right);

    if (leftResult && rightResult) return node;

    return leftResult || rightResult;
  }
};
