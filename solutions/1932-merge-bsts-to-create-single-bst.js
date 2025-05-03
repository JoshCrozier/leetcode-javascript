/**
 * 1932. Merge BSTs to Create Single BST
 * https://leetcode.com/problems/merge-bsts-to-create-single-bst/
 * Difficulty: Hard
 *
 * You are given n BST (binary search tree) root nodes for n separate BSTs stored in an array
 * trees (0-indexed). Each BST in trees has at most 3 nodes, and no two roots have the same
 * value. In one operation, you can:
 * - Select two distinct indices i and j such that the value stored at one of the leaves of
 *   trees[i] is equal to the root value of trees[j].
 * - Replace the leaf node in trees[i] with trees[j].
 * - Remove trees[j] from trees.
 *
 * Return the root of the resulting BST if it is possible to form a valid BST after
 * performing n - 1 operations, or null if it is impossible to create a valid BST.
 *
 * A BST (binary search tree) is a binary tree where each node satisfies the following property:
 * - Every node in the node's left subtree has a value strictly less than the node's value.
 * - Every node in the node's right subtree has a value strictly greater than the node's value.
 *
 * A leaf is a node that has no children.
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
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
var canMerge = function(trees) {
  const valueToTree = new Map();
  const leafValues = new Set();
  const inDegree = new Map();

  for (const tree of trees) {
    valueToTree.set(tree.val, tree);
    if (tree.left) leafValues.add(tree.left.val);
    if (tree.right) leafValues.add(tree.right.val);
  }

  let root = null;
  for (const tree of trees) {
    if (!leafValues.has(tree.val)) {
      if (root) return null;
      root = tree;
    }
    if (tree.left) inDegree.set(tree.left.val, (inDegree.get(tree.left.val) || 0) + 1);
    if (tree.right) inDegree.set(tree.right.val, (inDegree.get(tree.right.val) || 0) + 1);
  }

  if (!root) return null;

  const merged = mergeTrees(root, valueToTree, inDegree);
  if (!merged || valueToTree.size > 1 || !isValidBST(merged, -Infinity, Infinity)) {
    return null;
  }

  return merged;

  function mergeTrees(node, valueToTree, inDegree) {
    if (!node) return node;

    if (!node.left && !node.right && valueToTree.has(node.val) && inDegree.get(node.val) === 1) {
      const tree = valueToTree.get(node.val);
      if (tree === node) return node;
      valueToTree.delete(node.val);
      return mergeTrees(tree, valueToTree, inDegree);
    }

    node.left = mergeTrees(node.left, valueToTree, inDegree);
    node.right = mergeTrees(node.right, valueToTree, inDegree);
    return node;
  }

  function isValidBST(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
  }
};
