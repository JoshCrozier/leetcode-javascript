/**
 * 2737. Find the Closest Marked Node
 * https://leetcode.com/problems/find-the-closest-marked-node/
 * Difficulty: Medium
 *
 * You are given a positive integer n which is the number of nodes of a 0-indexed directed
 * weighted graph and a 0-indexed 2D array edges where edges[i] = [ui, vi, wi] indicates
 * that there is an edge from node ui to node vi with weight wi.
 *
 * You are also given a node s and a node array marked; your task is to find the minimum
 * distance from s to any of the nodes in marked.
 *
 * Return an integer denoting the minimum distance from s to any node in marked or -1 if
 * there are no paths from s to any of the marked nodes.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function(n, edges, s, marked) {
  const graph = new Array(n).fill().map(() => []);
  const markedSet = new Set(marked);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
  }

  const distances = new Array(n).fill(Infinity);
  const pq = new PriorityQueue((a, b) => a[0] - b[0]);
  distances[s] = 0;
  pq.enqueue([0, s]);

  while (!pq.isEmpty()) {
    const [currentDist, node] = pq.dequeue();

    if (currentDist > distances[node]) continue;

    if (markedSet.has(node)) {
      return currentDist;
    }

    for (const [neighbor, weight] of graph[node]) {
      const newDist = currentDist + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue([newDist, neighbor]);
      }
    }
  }

  return -1;
};
