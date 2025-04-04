/**
 * 1110. Delete Nodes And Return Forest
 * https://leetcode.com/problems/delete-nodes-and-return-forest/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, each node in the tree has a distinct value.
 *
 * After deleting all nodes with a value in toDelete, we are left with a forest (a disjoint
 * union of trees).
 *
 * Return the roots of the trees in the remaining forest. You may return the result in any order.
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
 * @param {number[]} toDelete
 * @return {TreeNode[]}
 */
var delNodes = function(root, toDelete) {
  const deleteSet = new Set(toDelete);
  const forest = [];

  traverse(root, true);
  return forest;

  function traverse(node, isRoot) {
    if (!node) return null;

    const shouldDelete = deleteSet.has(node.val);
    if (isRoot && !shouldDelete) forest.push(node);

    node.left = traverse(node.left, shouldDelete);
    node.right = traverse(node.right, shouldDelete);

    return shouldDelete ? null : node;
  }
};
