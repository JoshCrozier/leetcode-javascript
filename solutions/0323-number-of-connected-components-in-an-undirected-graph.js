/**
 * 323. Number of Connected Components in an Undirected Graph
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * Difficulty: Medium
 *
 * You have a graph of n nodes. You are given an integer n and an array edges where
 * edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 *
 * Return the number of connected components in the graph.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  const parent = new Array(n).fill().map((_, i) => i);
  let components = n;

  for (const [node1, node2] of edges) {
    union(node1, node2);
  }

  return components;

  function find(node) {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  }

  function union(node1, node2) {
    const root1 = find(node1);
    const root2 = find(node2);
    if (root1 !== root2) {
      parent[root1] = root2;
      components--;
    }
  }
};
