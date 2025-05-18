/**
 * 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
 * https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/
 * Difficulty: Medium
 *
 * You are given an integer n. There is an undirected graph with n nodes, numbered from 0
 * to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that
 * there exists an undirected edge connecting nodes ai and bi.
 *
 * Return the number of pairs of different nodes that are unreachable from each other.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(n).fill(false);
  let result = 0;

  let totalNodes = 0;
  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      const componentSize = exploreComponent(node);
      result += totalNodes * componentSize;
      totalNodes += componentSize;
    }
  }

  return result;

  function exploreComponent(node) {
    if (visited[node]) return 0;
    visited[node] = true;
    let size = 1;
    for (const neighbor of graph[node]) {
      size += exploreComponent(neighbor);
    }
    return size;
  }
};
