/**
 * 863. All Nodes Distance K in Binary Tree
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, the value of a target node target, and an integer k, return an
 * array of the values of all nodes that have a distance k from the target node.
 *
 * You can return the answer in any order.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  const graph = new Map();
  const result = [];

  buildGraph(root, null);
  findNodesAtDistance(target.val, 0, new Set());

  return result;

  function buildGraph(node, parent) {
    if (!node) return;
    if (parent) {
      graph.set(node.val, graph.get(node.val) || new Set());
      graph.get(node.val).add(parent.val);
      graph.set(parent.val, graph.get(parent.val) || new Set());
      graph.get(parent.val).add(node.val);
    }
    buildGraph(node.left, node);
    buildGraph(node.right, node);
  }

  function findNodesAtDistance(currentVal, distance, visited) {
    if (distance === k) {
      result.push(currentVal);
      return;
    }
    visited.add(currentVal);
    const neighbors = graph.get(currentVal) || new Set();
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        findNodesAtDistance(neighbor, distance + 1, visited);
      }
    }
  }
};
