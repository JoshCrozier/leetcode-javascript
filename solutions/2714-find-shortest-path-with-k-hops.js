/**
 * 2714. Find Shortest Path with K Hops
 * https://leetcode.com/problems/find-shortest-path-with-k-hops/
 * Difficulty: Hard
 *
 * You are given a positive integer n which is the number of nodes of a 0-indexed undirected
 * weighted connected graph and a 0-indexed 2D array edges where edges[i] = [ui, vi, wi]
 * indicates that there is an edge between nodes ui and vi with weight wi.
 *
 * You are also given two nodes s and d, and a positive integer k, your task is to find the
 * shortest path from s to d, but you can hop over at most k edges. In other words, make the
 * weight of at most k edges 0 and then find the shortest path from s to d.
 *
 * Return the length of the shortest path from s to d with the given condition.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number} d
 * @param {number} k
 * @return {number}
 */
var shortestPathWithHops = function(n, edges, s, d, k) {
  const graph = new Array(n).fill().map(() => []);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const dist = new Array(n).fill().map(() => new Array(k + 1).fill(Infinity));
  const visited = new Array(n).fill().map(() => new Array(k + 1).fill(false));
  const pq = new PriorityQueue((a, b) => a[0] - b[0]);

  pq.enqueue([0, k, s]);

  while (!pq.isEmpty()) {
    const [currentDist, hopsLeft, node] = pq.dequeue();

    if (visited[node][hopsLeft]) continue;
    visited[node][hopsLeft] = true;

    if (node === d) return currentDist;

    for (const [neighbor, weight] of graph[node]) {
      const newDist = currentDist + weight;
      if (newDist < dist[neighbor][hopsLeft]) {
        dist[neighbor][hopsLeft] = newDist;
        pq.enqueue([newDist, hopsLeft, neighbor]);
      }

      if (hopsLeft > 0 && currentDist < dist[neighbor][hopsLeft - 1]) {
        dist[neighbor][hopsLeft - 1] = currentDist;
        pq.enqueue([currentDist, hopsLeft - 1, neighbor]);
      }
    }
  }

  return -1;
};
