/**
 * 685. Redundant Connection II
 * https://leetcode.com/problems/redundant-connection-ii/
 * Difficulty: Hard
 *
 * In this problem, a rooted tree is a directed graph such that, there is exactly one node
 * (the root) for which all other nodes are descendants of this node, plus every node has
 * exactly one parent, except for the root node which has no parents.
 *
 * The given input is a directed graph that started as a rooted tree with n nodes (with
 * distinct values from 1 to n), with one additional directed edge added. The added edge
 * has two different vertices chosen from 1 to n, and was not an edge that already existed.
 *
 * The resulting graph is given as a 2D-array of edges. Each element of edges is a pair
 * [ui, vi] that represents a directed edge connecting nodes ui and vi, where ui is a parent
 * of child vi.
 *
 * Return an edge that can be removed so that the resulting graph is a rooted tree of n
 * nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  const n = edges.length;
  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  const rank = new Uint32Array(n + 1);
  const parents = new Int32Array(n + 1).fill(-1);
  let conflict = -1;
  let cycle = -1;

  edges.forEach(([u, v], i) => {
    if (parents[v] !== -1) conflict = i;
    else {
      parents[v] = u;
      union(u, v) || (cycle = i);
    }
  });

  return conflict === -1 ? edges[cycle] : cycle === -1
    ? edges[conflict] : [parents[edges[conflict][1]], edges[conflict][1]];

  function find(x) {
    return parent[x] === x ? x : (parent[x] = find(parent[x]));
  }
  function union(x, y) {
    const [px, py] = [find(x), find(y)];
    if (px === py) return false;
    rank[px] < rank[py]
      ? parent[px] = py
      : rank[px] > rank[py] ? parent[py] = px : (parent[py] = px, rank[px]++);
    return true;
  }
};
