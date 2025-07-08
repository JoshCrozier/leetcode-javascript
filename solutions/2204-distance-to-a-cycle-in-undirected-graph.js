/**
 * 2204. Distance to a Cycle in Undirected Graph
 * https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/
 * Difficulty: Hard
 *
 * You are given a positive integer n representing the number of nodes in a connected undirected
 * graph containing exactly one cycle. The nodes are numbered from 0 to n - 1 (inclusive).
 *
 * You are also given a 2D integer array edges, where edges[i] = [node1i, node2i] denotes that
 * there is a bidirectional edge connecting node1i and node2i in the graph.
 *
 * The distance between two nodes a and b is defined to be the minimum number of edges that are
 * needed to go from a to b.
 *
 * Return an integer array answer of size n, where answer[i] is the minimum distance between the
 * ith node and any node in the cycle.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const result = new Array(n).fill(0);
  const degree = new Array(n).fill(0);
  const queue = [];

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 0; i < n; i++) {
    degree[i] = graph[i].length;
    if (degree[i] === 1) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    result[node] = Infinity;

    for (const neighbor of graph[node]) {
      if (degree[neighbor] > 1 && --degree[neighbor] === 1) {
        queue.push(neighbor);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (degree[i] > 1) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (result[neighbor] > result[node] + 1) {
        result[neighbor] = result[node] + 1;
        queue.push(neighbor);
      }
    }
  }

  return result;
};
