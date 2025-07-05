/**
 * 1644. Lowest Common Ancestor of a Binary Tree II
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the lowest common ancestor (LCA) of two given
 * nodes, p and q. If either node p or q does not exist in the tree, return null. All
 * values of the nodes in the tree are unique.
 *
 * According to the definition of LCA on Wikipedia: "The lowest common ancestor of two
 * nodes p and q in a binary tree T is the lowest node that has both p and q as descendants
 * (where we allow a node to be a descendant of itself)". A descendant of a node x is a
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let foundP = false;
  let foundQ = false;

  const lca = findLCA(root);
  return foundP && foundQ ? lca : null;

  function findLCA(node) {
    if (!node) return null;

    const leftResult = findLCA(node.left);
    const rightResult = findLCA(node.right);

    let currentMatch = false;
    if (node === p) {
      foundP = true;
      currentMatch = true;
    }

    if (node === q) {
      foundQ = true;
      currentMatch = true;
    }

    if (leftResult && rightResult) {
      return node;
    }

    if (currentMatch && (leftResult || rightResult)) {
      return node;
    }

    return leftResult || rightResult || (currentMatch ? node : null);
  }
};
