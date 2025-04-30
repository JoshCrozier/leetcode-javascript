/**
 * 1786. Number of Restricted Paths From First to Last Node
 * https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/
 * Difficulty: Medium
 *
 * There is an undirected weighted connected graph. You are given a positive integer n which
 * denotes that the graph has n nodes labeled from 1 to n, and an array edges where each
 * edges[i] = [ui, vi, weighti] denotes that there is an edge between nodes ui and vi with
 * weight equal to weighti.
 *
 * A path from node start to node end is a sequence of nodes [z0, z1, z2, ..., zk] such that
 * z0 = start and zk = end and there is an edge between zi and zi+1 where 0 <= i <= k-1.
 *
 * The distance of a path is the sum of the weights on the edges of the path. Let
 * distanceToLastNode(x) denote the shortest distance of a path between node n and node x.
 * A restricted path is a path that also satisfies that
 * distanceToLastNode(zi) > distanceToLastNode(zi+1) where 0 <= i <= k-1.
 *
 * Return the number of restricted paths from node 1 to node n. Since that number may be too
 * large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function(n, edges) {
  const MODULO = 1e9 + 7;
  const graph = {};
  for (const [u, v, weight] of edges) {
    (graph[u] ??= []).push({ edge: v, weight });
    (graph[v] ??= []).push({ edge: u, weight });
  }

  const distances = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  distances[n] = 0;

  const NOT_VISITED = 0;
  const VISITED = 1;
  const IN_QUEUE = 2;
  const states = new Array(n + 1).fill(NOT_VISITED);
  const queue = [n];

  while (queue.length) {
    const node = queue.shift();
    states[node] = IN_QUEUE;

    for (const { edge, weight } of graph[node]) {
      if (distances[node] + weight >= distances[edge]) continue;

      distances[edge] = distances[node] + weight;

      if (states[edge] === NOT_VISITED) {
        queue.push(edge);
        states[edge] = VISITED;
      } else if (states[edge] === IN_QUEUE) {
        queue.unshift(edge);
      }
    }
  }

  const memo = new Map([[n, 1]]);

  return countPaths(1);

  function countPaths(node) {
    if (memo.has(node)) return memo.get(node);

    let count = 0;
    for (const { edge } of graph[node]) {
      if (distances[edge] < distances[node]) {
        count = (count + countPaths(edge)) % MODULO;
      }
    }

    memo.set(node, count);
    return count;
  }
};
