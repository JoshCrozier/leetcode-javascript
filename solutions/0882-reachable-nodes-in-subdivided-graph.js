/**
 * 882. Reachable Nodes In Subdivided Graph
 * https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/
 * Difficulty: Hard
 *
 * You are given an undirected graph (the "original graph") with n nodes labeled from 0 to n - 1.
 * You decide to subdivide each edge in the graph into a chain of nodes, with the number of new
 * nodes varying between each edge.
 *
 * The graph is given as a 2D array of edges where edges[i] = [ui, vi, cnti] indicates that there
 * is an edge between nodes ui and vi in the original graph, and cnti is the total number of new
 * nodes that you will subdivide the edge into. Note that cnti == 0 means you will not subdivide
 * the edge.
 *
 * To subdivide the edge [ui, vi], replace it with (cnti + 1) new edges and cnti new nodes. The
 * new nodes are x1, x2, ..., xcnti, and the new edges are [ui, x1], [x1, x2], [x2, x3], ...,
 * [xcnti-1, xcnti], [xcnti, vi].
 *
 * In this new graph, you want to know how many nodes are reachable from the node 0, where a node
 * is reachable if the distance is maxMoves or less.
 *
 * Given the original graph and maxMoves, return the number of nodes that are reachable from node
 * 0 in the new graph.
 */

/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const dist = {};
  for (let i = 0; i < n; i++) {
    dist[i] = Infinity;
  }
  dist[0] = 0;

  const used = {};
  const pq = [[0, 0]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, node] = pq.shift();

    if (d > dist[node]) continue;

    for (const [nei, weight] of graph[node]) {
      const edgeId = `${Math.min(node, nei)}-${Math.max(node, nei)}`;
      const dirId = node < nei ? 0 : 1;

      if (!used[edgeId]) {
        used[edgeId] = [0, 0];
      }
      used[edgeId][dirId] = Math.min(maxMoves - d, weight);
      if (d + weight + 1 <= maxMoves && d + weight + 1 < dist[nei]) {
        dist[nei] = d + weight + 1;
        pq.push([dist[nei], nei]);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (dist[i] <= maxMoves) result++;
  }

  for (const [u, v, cnt] of edges) {
    const edgeId = `${Math.min(u, v)}-${Math.max(u, v)}`;
    if (used[edgeId]) {
      const totalUsed = used[edgeId][0] + used[edgeId][1];
      result += Math.min(cnt, totalUsed);
    }
  }

  return result;
};
