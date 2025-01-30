/**
 * 2493. Divide Nodes Into the Maximum Number of Groups
 * https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/
 * Difficulty: Hard
 *
 * You are given a positive integer n representing the number of nodes in an undirected graph.
 * The nodes are labeled from 1 to n.
 *
 * You are also given a 2D integer array edges, where edges[i] = [ai, bi] indicates that there
 * is a bidirectional edge between nodes ai and bi. Notice that the given graph may be disconnected.
 *
 * Divide the nodes of the graph into m groups (1-indexed) such that:
 * - Each node in the graph belongs to exactly one group.
 * - For every pair of nodes in the graph that are connected by an edge [ai, bi], if ai belongs to
 *   the group with index x, and bi belongs to the group with index y, then |y - x| = 1.
 *
 * Return the maximum number of groups (i.e., maximum m) into which you can divide the nodes.
 * Return -1 if it is impossible to group the nodes with the given conditions.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
  const graph = new Array(n).fill().map(() => []);
  for (const [i, j] of edges) {
    graph[i - 1].push(j - 1);
    graph[j - 1].push(i - 1);
  }

  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const groups = new Array(n).fill(0);
    const queue = [i];
    let max = 1;
    let root = i;

    groups[i] = 1;

    while (queue.length) {
      const key = queue.shift();
      root = Math.min(root, key);

      for (const node of graph[key]) {
        if (groups[node] === 0) {
          groups[node] = groups[key] + 1;
          max = Math.max(max, groups[node]);
          queue.push(node);
        } else if (Math.abs(groups[node] - groups[key]) !== 1) {
          return -1;
        }
      }
    }

    result[root] = Math.max(result[root], max);
  }

  return result.reduce((a, b) => a + b);
};
