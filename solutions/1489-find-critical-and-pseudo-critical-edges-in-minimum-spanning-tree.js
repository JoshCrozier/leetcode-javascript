/**
 * 1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
 * https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
 * Difficulty: Hard
 *
 * Given a weighted undirected connected graph with n vertices numbered from 0 to n - 1, and an
 * array edges where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge
 * between nodes ai and bi. A minimum spanning tree (MST) is a subset of the graph's edges that
 * connects all vertices without cycles and with the minimum possible total edge weight.
 *
 * Find all the critical and pseudo-critical edges in the given graph's minimum spanning tree
 * (MST). An MST edge whose deletion from the graph would cause the MST weight to increase is
 * called a critical edge. On the other hand, a pseudo-critical edge is that which can appear
 * in some MSTs but not all.
 *
 * Note that you can return the indices of the edges in any order.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
  const indexedEdges = edges.map((edge, i) => [...edge, i]);
  indexedEdges.sort((a, b) => a[2] - b[2]);

  const minWeight = getMSTWeight();
  const critical = [];
  const pseudoCritical = [];

  for (let i = 0; i < edges.length; i++) {
    if (getMSTWeight(i) > minWeight) {
      critical.push(indexedEdges[i][3]);
    } else if (getMSTWeight(-1, i) === minWeight) {
      pseudoCritical.push(indexedEdges[i][3]);
    }
  }

  return [critical, pseudoCritical];

  function findParent(parents, x) {
    if (parents[x] !== x) parents[x] = findParent(parents, parents[x]);
    return parents[x];
  }

  function union(parents, ranks, x, y) {
    const px = findParent(parents, x);
    const py = findParent(parents, y);
    if (px === py) return false;
    if (ranks[px] < ranks[py]) {
      parents[px] = py;
    } else if (ranks[px] > ranks[py]) {
      parents[py] = px;
    } else {
      parents[py] = px;
      ranks[px]++;
    }
    return true;
  }

  function getMSTWeight(exclude = -1, include = -1) {
    const parents = Array.from({ length: n }, (_, i) => i);
    const ranks = new Array(n).fill(0);
    let weight = 0;
    let edgesUsed = 0;

    if (include !== -1) {
      const [u, v, w] = indexedEdges[include];
      if (union(parents, ranks, u, v)) {
        weight += w;
        edgesUsed++;
      }
    }

    for (let i = 0; i < indexedEdges.length; i++) {
      if (i === exclude || i === include) continue;
      const [u, v, w] = indexedEdges[i];
      if (union(parents, ranks, u, v)) {
        weight += w;
        edgesUsed++;
      }
    }

    return edgesUsed === n - 1 ? weight : Infinity;
  }
};
