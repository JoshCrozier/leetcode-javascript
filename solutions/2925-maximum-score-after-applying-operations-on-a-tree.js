/**
 * 2925. Maximum Score After Applying Operations on a Tree
 * https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/
 * Difficulty: Medium
 *
 * There is an undirected tree with n nodes labeled from 0 to n - 1, and rooted at node 0. You are
 * given a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that there
 * is an edge between nodes ai and bi in the tree.
 *
 * You are also given a 0-indexed integer array values of length n, where values[i] is the value
 * associated with the ith node.
 *
 * You start with a score of 0. In one operation, you can:
 * - Pick any node i.
 * - Add values[i] to your score.
 * - Set values[i] to 0.
 *
 * A tree is healthy if the sum of values on the path from the root to any leaf node is different
 * than zero.
 *
 * Return the maximum score you can obtain after performing these operations on the tree any
 * number of times so that it remains healthy.
 */

/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
  const n = values.length;
  const graph = new Array(n).fill().map(() => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const totalSum = values.reduce((sum, val) => sum + val, 0);
  const minToKeep = dfs(0, -1);

  return totalSum - minToKeep;

  function dfs(node, parent) {
    const children = graph[node].filter(child => child !== parent);

    if (children.length === 0) {
      return values[node];
    }

    let childrenSum = 0;
    for (const child of children) {
      childrenSum += dfs(child, node);
    }

    return Math.min(values[node], childrenSum);
  }
};
