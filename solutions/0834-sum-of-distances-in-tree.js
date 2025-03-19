/**
 * 834. Sum of Distances in Tree
 * https://leetcode.com/problems/sum-of-distances-in-tree/
 * Difficulty: Hard
 *
 * There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
 *
 * You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there
 * is an edge between nodes ai and bi in the tree.
 *
 * Return an array answer of length n where answer[i] is the sum of the distances between the ith
 * node in the tree and all other nodes.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const count = new Array(n).fill(1);
  const result = new Array(n).fill(0);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs1(node, parent) {
    for (const child of graph[node]) {
      if (child !== parent) {
        dfs1(child, node);
        count[node] += count[child];
        result[node] += result[child] + count[child];
      }
    }
  }

  function dfs2(node, parent) {
    for (const child of graph[node]) {
      if (child !== parent) {
        result[child] = result[node] - count[child] + (n - count[child]);
        dfs2(child, node);
      }
    }
  }

  dfs1(0, -1);
  dfs2(0, -1);

  return result;
};
