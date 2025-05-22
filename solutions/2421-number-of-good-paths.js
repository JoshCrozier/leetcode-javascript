/**
 * 2421. Number of Good Paths
 * https://leetcode.com/problems/number-of-good-paths/
 * Difficulty: Hard
 *
 * There is a tree (i.e. a connected, undirected graph with no cycles) consisting of n nodes
 * numbered from 0 to n - 1 and exactly n - 1 edges.
 *
 * You are given a 0-indexed integer array vals of length n where vals[i] denotes the value
 * of the ith node. You are also given a 2D integer array edges where edges[i] = [ai, bi]
 * denotes that there exists an undirected edge connecting nodes ai and bi.
 *
 * A good path is a simple path that satisfies the following conditions:
 * 1. The starting node and the ending node have the same value.
 * 2. All nodes between the starting node and the ending node have values less than or equal
 *    to the starting node (i.e. the starting node's value should be the maximum value along
 *    the path).
 *
 * Return the number of distinct good paths.
 *
 * Note that a path and its reverse are counted as the same path. For example, 0 -> 1 is
 * considered to be the same as 1 -> 0. A single node is also considered as a valid path.
 */

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
  const n = vals.length;
  const graph = Array.from({length: n}, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const parent = new Array(n).fill(-1);
  const rank = new Array(n).fill(0);
  function find(x) {
    if (parent[x] === -1) return x;
    return parent[x] = find(parent[x]);
  }

  function union(x, y) {
    let px = find(x);
    let py = find(y);
    if (px === py) return;
    if (rank[px] < rank[py]) [px, py] = [py, px];
    parent[py] = px;
    if (rank[px] === rank[py]) rank[px]++;
  }

  const valueGroups = new Map();
  for (let i = 0; i < n; i++) {
    if (!valueGroups.has(vals[i])) {
      valueGroups.set(vals[i], []);
    }
    valueGroups.get(vals[i]).push(i);
  }

  let result = 0;
  for (const value of [...valueGroups.keys()].sort((a, b) => a - b)) {
    const nodes = valueGroups.get(value);

    for (const node of nodes) {
      for (const neighbor of graph[node]) {
        if (vals[neighbor] <= value) {
          union(node, neighbor);
        }
      }
    }

    const groupCount = new Map();
    for (const node of nodes) {
      const root = find(node);
      groupCount.set(root, (groupCount.get(root) || 0) + 1);
    }

    for (const count of groupCount.values()) {
      result += (count * (count + 1)) / 2;
    }
  }

  return result;
};
