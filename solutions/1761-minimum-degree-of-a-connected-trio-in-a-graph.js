/**
 * 1761. Minimum Degree of a Connected Trio in a Graph
 * https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/
 * Difficulty: Hard
 *
 * You are given an undirected graph. You are given an integer n which is the number of nodes in
 * the graph and an array edges, where each edges[i] = [ui, vi] indicates that there is an
 * undirected edge between ui and vi.
 *
 * A connected trio is a set of three nodes where there is an edge between every pair of them.
 *
 * The degree of a connected trio is the number of edges where one endpoint is in the trio, and
 * the other is not.
 *
 * Return the minimum degree of a connected trio in the graph, or -1 if the graph has no
 * connected trios.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTrioDegree = function(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => new Set());
  const degrees = Array(n + 1).fill(0);

  for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
    degrees[u]++;
    degrees[v]++;
  }

  let minDegree = Infinity;

  for (let i = 1; i <= n; i++) {
    for (const j of graph[i]) {
      for (const k of graph[j]) {
        if (graph[k].has(i)) {
          const trioDegree = degrees[i] + degrees[j] + degrees[k] - 6;
          minDegree = Math.min(minDegree, trioDegree);
        }
      }
    }
  }

  return minDegree === Infinity ? -1 : minDegree;
};
