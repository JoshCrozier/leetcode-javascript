/**
 * 979. Distribute Coins in Binary Tree
 * https://leetcode.com/problems/distribute-coins-in-binary-tree/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree with n nodes where each node in the tree has node.val
 * coins. There are n coins in total throughout the whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one node to another.
 * A move may be from parent to child, or from child to parent.
 *
 * Return the minimum number of moves required to make every node have exactly one coin.
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
 * @return {number}
 */
var distributeCoins = function(root) {
  let result = 0;
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return 0;

    const leftExcess = traverse(node.left);
    const rightExcess = traverse(node.right);
    const totalExcess = node.val + leftExcess + rightExcess - 1;

    result += Math.abs(leftExcess) + Math.abs(rightExcess);

    return totalExcess;
  }
};
