/**
 * 2203. Minimum Weighted Subgraph With the Required Paths
 * https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/
 * Difficulty: Hard
 *
 * You are given an integer n denoting the number of nodes of a weighted directed graph. The nodes
 * are numbered from 0 to n - 1.
 *
 * You are also given a 2D integer array edges where edges[i] = [fromi, toi, weighti] denotes that
 * there exists a directed edge from fromi to toi with weight weighti.
 *
 * Lastly, you are given three distinct integers src1, src2, and dest denoting three distinct nodes
 * of the graph.
 *
 * Return the minimum weight of a subgraph of the graph such that it is possible to reach dest from
 * both src1 and src2 via a set of edges of this subgraph. In case such a subgraph does not exist,
 * return -1.
 *
 * A subgraph is a graph whose vertices and edges are subsets of the original graph. The weight of
 * a subgraph is the sum of weights of its constituent edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} src1
 * @param {number} src2
 * @param {number} dest
 * @return {number}
 */
var minimumWeight = function(n, edges, src1, src2, dest) {
  const forwardGraph = Array.from({ length: n }, () => []);
  const reverseGraph = Array.from({ length: n }, () => []);

  for (const [from, to, weight] of edges) {
    forwardGraph[from].push([to, weight]);
    reverseGraph[to].push([from, weight]);
  }

  const distFromSrc1 = dijkstra(forwardGraph, src1);
  const distFromSrc2 = dijkstra(forwardGraph, src2);
  const distToDest = dijkstra(reverseGraph, dest);
  let minWeight = Infinity;
  for (let i = 0; i < n; i++) {
    if (distFromSrc1[i] !== Infinity && distFromSrc2[i] !== Infinity
        && distToDest[i] !== Infinity) {
      minWeight = Math.min(minWeight, distFromSrc1[i] + distFromSrc2[i] + distToDest[i]);
    }
  }

  return minWeight === Infinity ? -1 : minWeight;

  function dijkstra(graph, start) {
    const distances = new Array(n).fill(Infinity);
    distances[start] = 0;
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);
    pq.enqueue([0, start]);

    while (!pq.isEmpty()) {
      const [dist, node] = pq.dequeue();
      if (dist > distances[node]) continue;

      for (const [next, weight] of graph[node]) {
        if (distances[next] > dist + weight) {
          distances[next] = dist + weight;
          pq.enqueue([distances[next], next]);
        }
      }
    }

    return distances;
  }
};
