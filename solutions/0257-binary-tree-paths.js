/**
 * 257. Binary Tree Paths
 * https://leetcode.com/problems/binary-tree-paths/
 * Difficulty: Easy
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  return tranverse(root);
};

function tranverse(node, path = [], result = []) {
  if (!node) return;
  path.push(node.val.toString());
  if (!node.left && !node.right) {
    result.push(path.join('->'));
  } else {
    tranverse(node.left, path.slice(), result);
    tranverse(node.right, path.slice(), result);
  }
  return result;
}
