/**
 * 993. Cousins in Binary Tree
 * https://leetcode.com/problems/cousins-in-binary-tree/
 * Difficulty: Easy
 *
 * Given the root of a binary tree with unique values and the values of two different nodes of the
 * tree x and y, return true if the nodes corresponding to the values x and y in the tree are
 * cousins, or false otherwise.
 *
 * Two nodes of a binary tree are cousins if they have the same depth with different parents.
 *
 * Note that in a binary tree, the root node is at the depth 0, and children of each depth k node
 * are at the depth k + 1.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xDepth = 0;
  let yDepth = 0;
  let xParent = null;

  traverse(root, 0, null);

  return xDepth === yDepth && xParent !== yParent;

  function traverse(node, depth, parent) {
    if (!node) return;

    if (node.val === x) {
      xDepth = depth;
      xParent = parent;
    }
    if (node.val === y) {
      yDepth = depth;
      yParent = parent;
    }

    traverse(node.left, depth + 1, node);
    traverse(node.right, depth + 1, node);
  }
};
