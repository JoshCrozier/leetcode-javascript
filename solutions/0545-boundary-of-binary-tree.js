/**
 * 545. Boundary of Binary Tree
 * https://leetcode.com/problems/boundary-of-binary-tree/
 * Difficulty: Medium
 *
 * The boundary of a binary tree is the concatenation of the root, the left boundary, the leaves
 * ordered from left-to-right, and the reverse order of the right boundary.
 *
 * The left boundary is the set of nodes defined by the following:
 * - The root node's left child is in the left boundary. If the root does not have a left child,
 *   then the left boundary is empty.
 * - If a node in the left boundary and has a left child, then the left child is in the left
 *   boundary.
 * - If a node is in the left boundary, has no left child, but has a right child, then the right
 *   child is in the left boundary.
 * - The leftmost leaf is not in the left boundary.
 *
 * The right boundary is similar to the left boundary, except it is the right side of the root's
 * right subtree. Again, the leaf is not part of the right boundary, and the right boundary is
 * empty if the root does not have a right child.
 *
 * The leaves are nodes that do not have any children. For this problem, the root is not a leaf.
 *
 * Given the root of a binary tree, return the values of its boundary.
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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  const result = [root.val];

  collectLeftBoundary(root.left);
  collectLeaves(root);
  collectRightBoundary(root.right);

  return result;

  function isLeaf(node) {
    return node && !node.left && !node.right;
  }

  function collectLeftBoundary(node) {
    if (!node || isLeaf(node)) return;
    result.push(node.val);
    if (node.left) {
      collectLeftBoundary(node.left);
    } else {
      collectLeftBoundary(node.right);
    }
  }

  function collectLeaves(node) {
    if (!node) return;
    if (isLeaf(node)) {
      result.push(node.val);
      return;
    }
    collectLeaves(node.left);
    collectLeaves(node.right);
  }

  function collectRightBoundary(node) {
    if (!node || isLeaf(node)) return;
    if (node.right) {
      collectRightBoundary(node.right);
    } else {
      collectRightBoundary(node.left);
    }
    result.push(node.val);
  }
};
