/**
 * 1382. Balance a Binary Search Tree
 * https://leetcode.com/problems/balance-a-binary-search-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary search tree, return a balanced binary search tree with the same
 * node values. If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if the depth of the two subtrees of every node never differs
 * by more than 1.
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
var balanceBST = function(root) {
  const nodes = [];
  collectInOrder(root);
  return buildBalancedTree(0, nodes.length - 1);

  function collectInOrder(node) {
    if (!node) return;
    collectInOrder(node.left);
    nodes.push(node.val);
    collectInOrder(node.right);
  }

  function buildBalancedTree(start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nodes[mid]);
    node.left = buildBalancedTree(start, mid - 1);
    node.right = buildBalancedTree(mid + 1, end);
    return node;
  }
};
