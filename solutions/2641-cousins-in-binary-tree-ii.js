/**
 * 2641. Cousins in Binary Tree II
 * https://leetcode.com/problems/cousins-in-binary-tree-ii/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, replace the value of each node in the tree with the
 * sum of all its cousins' values.
 *
 * Two nodes of a binary tree are cousins if they have the same depth with different parents.
 *
 * Return the root of the modified tree.
 *
 * Note that the depth of a node is the number of edges in the path from the root node to it.
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
var replaceValueInTree = function(root) {
  const levelSums = [];

  collectSums(root, 0);
  replaceValues(root, 0, 0);

  return root;

  function collectSums(node, depth) {
    if (!node) return;
    if (levelSums.length <= depth) levelSums.push(0);
    levelSums[depth] += node.val;
    collectSums(node.left, depth + 1);
    collectSums(node.right, depth + 1);
  }

  function replaceValues(node, depth, siblingSum) {
    if (!node) return;
    node.val = levelSums[depth] - node.val - siblingSum;

    const leftVal = node.left ? node.left.val : 0;
    const rightVal = node.right ? node.right.val : 0;
    replaceValues(node.left, depth + 1, rightVal);
    replaceValues(node.right, depth + 1, leftVal);
  }
};
