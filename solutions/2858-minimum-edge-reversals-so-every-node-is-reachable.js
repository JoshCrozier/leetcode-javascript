/**
 * 2858. Minimum Edge Reversals So Every Node Is Reachable
 * https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/
 * Difficulty: Hard
 *
 * There is a simple directed graph with n nodes labeled from 0 to n - 1. The graph would form
 * a tree if its edges were bi-directional.
 *
 * You are given an integer n and a 2D integer array edges, where edges[i] = [ui, vi] represents
 * a directed edge going from node ui to node vi.
 *
 * An edge reversal changes the direction of an edge, i.e., a directed edge going from node ui to
 * node vi becomes a directed edge going from node vi to node ui.
 *
 * For every node i in the range [0, n - 1], your task is to independently calculate the minimum
 * number of edge reversals required so it is possible to reach any other node starting from node
 * i through a sequence of directed edges.
 *
 * Return an integer array answer, where answer[i] is the minimum number of edge reversals required
 * so it is possible to reach any other node starting from node i through a sequence of directed
 * edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push([v, 0]);
    graph[v].push([u, 1]);
  }

  const result = new Array(n);
  const rootReversals = dfs(0, -1);

  reroot(0, -1, rootReversals);

  return result;
  function dfs(node, parent) {
    let reversals = 0;
    for (const [neighbor, cost] of graph[node]) {
      if (neighbor !== parent) {
        reversals += cost + dfs(neighbor, node);
      }
    }
    return reversals;
  }

  function reroot(node, parent, parentReversals) {
    result[node] = parentReversals;
    for (const [neighbor, cost] of graph[node]) {
      if (neighbor !== parent) {
        const childReversals = result[node] - cost + (1 - cost);
        reroot(neighbor, node, childReversals);
      }
    }
  }
};
