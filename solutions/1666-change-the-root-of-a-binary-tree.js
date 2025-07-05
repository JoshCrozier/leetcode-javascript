/**
 * 1666. Change the Root of a Binary Tree
 * https://leetcode.com/problems/change-the-root-of-a-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree and a leaf node, reroot the tree so that the leaf is the
 * new root.
 *
 * You can reroot the tree with the following steps for each node cur on the path starting
 * from the leaf up to the root excluding the root:
 * 1. If cur has a left child, then that child becomes cur's right child.
 * 2. cur's original parent becomes cur's left child. Note that in this process the original
 *    parent's pointer to cur becomes null, making it have at most one child.
 *
 * Return the new root of the rerooted tree.
 *
 * Note: Ensure that your solution sets the Node.parent pointers correctly after rerooting or
 * you will receive "Wrong Answer".
 */

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var flipBinaryTree = function(root, leaf) {
  helper(leaf, null);
  return leaf;

  function helper(node, newParent) {
    const originalParent = node.parent;
    node.parent = newParent;
    if (!originalParent) return;

    if (node.left) node.right = node.left;
    node.left = originalParent;

    if (originalParent.left === node) {
      originalParent.left = null;
    } else {
      originalParent.right = null;
    }

    helper(originalParent, node);
  }
};
