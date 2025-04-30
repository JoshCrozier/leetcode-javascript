/**
 * 1782. Count Pairs Of Nodes
 * https://leetcode.com/problems/count-pairs-of-nodes/
 * Difficulty: Hard
 *
 * You are given an undirected graph defined by an integer n, the number of nodes, and a 2D
 * integer array edges, the edges in the graph, where edges[i] = [ui, vi] indicates that there
 * is an undirected edge between ui and vi. You are also given an integer array queries.
 *
 * Let incident(a, b) be defined as the number of edges that are connected to either node a or b.
 *
 * The answer to the jth query is the number of pairs of nodes (a, b) that satisfy both of the
 * following conditions:
 * - a < b
 * - incident(a, b) > queries[j]
 *
 * Return an array answers such that answers.length == queries.length and answers[j] is the
 * answer of the jth query.
 *
 * Note that there can be multiple edges between the same two nodes.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
var countPairs = function(n, edges, queries) {
  const degrees = Array(n + 1).fill(0);
  const edgeCounts = new Map();

  for (const [u, v] of edges) {
    degrees[u]++;
    degrees[v]++;
    const key = u < v ? `${u},${v}` : `${v},${u}`;
    edgeCounts.set(key, (edgeCounts.get(key) || 0) + 1);
  }

  const sortedDegrees = [...degrees].slice(1).sort((a, b) => a - b);
  const result = Array(queries.length).fill(0);

  for (let q = 0; q < queries.length; q++) {
    let total = 0;
    let left = 0;
    let right = n - 1;

    while (left < right) {
      if (sortedDegrees[left] + sortedDegrees[right] > queries[q]) {
        total += right - left;
        right--;
      } else {
        left++;
      }
    }

    for (const [key, count] of edgeCounts) {
      const [u, v] = key.split(',').map(Number);
      if (degrees[u] + degrees[v] > queries[q] && degrees[u] + degrees[v] - count <= queries[q]) {
        total--;
      }
    }

    result[q] = total;
  }

  return result;
};
