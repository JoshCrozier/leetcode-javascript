/**
 * 1145. Binary Tree Coloring Game
 * https://leetcode.com/problems/binary-tree-coloring-game/
 * Difficulty: Medium
 *
 * Two players play a turn based game on a binary tree. We are given the root of this binary tree,
 * and the number of nodes n in the tree. n is odd, and each node has a distinct value from 1 to n.
 *
 * Initially, the first player names a value x with 1 <= x <= n, and the second player names a value
 * y with 1 <= y <= n and y != x. The first player colors the node with value x red, and the second
 * player colors the node with value y blue.
 *
 * Then, the players take turns starting with the first player. In each turn, that player chooses
 * a node of their color (red if player 1, blue if player 2) and colors an uncolored neighbor of
 * the chosen node (either the left child, right child, or parent of the chosen node.)
 *
 * If (and only if) a player cannot choose such a node in this way, they must pass their turn. If
 * both players pass their turn, the game ends, and the winner is the player that colored more
 * nodes.
 *
 * You are the second player. If it is possible to choose such a y to ensure you win the game,
 * return true. If it is not possible, return false.
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  let leftCount = 0;
  let rightCount = 0;

  countNodes(root);

  const parentCount = n - leftCount - rightCount - 1;
  const maxRegion = Math.max(parentCount, leftCount, rightCount);

  return maxRegion > n / 2;

  function countNodes(node) {
    if (!node) return 0;
    const left = countNodes(node.left);
    const right = countNodes(node.right);
    if (node.val === x) {
      leftCount = left;
      rightCount = right;
    }
    return left + right + 1;
  }
};
