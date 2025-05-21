/**
 * 2385. Amount of Time for Binary Tree to Be Infected
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree with unique values, and an integer start.
 * At minute 0, an infection starts from the node with value start.
 *
 * Each minute, a node becomes infected if:
 * - The node is currently uninfected.
 * - The node is adjacent to an infected node.
 *
 * Return the number of minutes needed for the entire tree to be infected.
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  const graph = new Map();
  const queue = [start];
  const visited = new Set([start]);
  let result = -1;

  buildGraph(root, null);

  while (queue.length) {
    result++;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      for (const neighbor of graph.get(current) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  return result;

  function buildGraph(node, parent) {
    if (!node) return;
    if (!graph.has(node.val)) graph.set(node.val, []);
    if (parent) graph.get(node.val).push(parent.val);
    if (node.left) {
      graph.get(node.val).push(node.left.val);
      graph.set(node.left.val, graph.get(node.left.val) || []);
      graph.get(node.left.val).push(node.val);
    }
    if (node.right) {
      graph.get(node.val).push(node.right.val);
      graph.set(node.right.val, graph.get(node.right.val) || []);
      graph.get(node.right.val).push(node.val);
    }
    buildGraph(node.left, node);
    buildGraph(node.right, node);
  }
};
