/**
 * 2277. Closest Node to Path in Tree
 * https://leetcode.com/problems/closest-node-to-path-in-tree/
 * Difficulty: Hard
 *
 * You are given a positive integer n representing the number of nodes in a tree, numbered
 * from 0 to n - 1 (inclusive). You are also given a 2D integer array edges of length n - 1,
 * where edges[i] = [node1i, node2i] denotes that there is a bidirectional edge connecting
 * node1i and node2i in the tree.
 *
 * You are given a 0-indexed integer array query of length m where query[i] = [starti, endi, nodei]
 * means that for the ith query, you are tasked with finding the node on the path from starti to
 * endi that is closest to nodei.
 *
 * Return an integer array answer of length m, where answer[i] is the answer to the ith query.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var closestNode = function(n, edges, query) {
  const graph = new Array(n).fill().map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const depths = new Array(n).fill(0);
  const binaryParents = new Array(n).fill().map(() => new Array(16).fill(0));

  dfs(0, [], 0);

  return query.map(([a, b, q]) => {
    const candidates = [lca(a, b), lca(a, q), lca(b, q)];
    return candidates.reduce((deepest, current) =>
      depths[current] > depths[deepest] ? current : deepest
    );
  });

  function dfs(node, parents, depth) {
    depths[node] = depth;
    for (let bit = 0; bit < 16; bit++) {
      if ((1 << bit) <= parents.length) {
        binaryParents[node][bit] = parents[parents.length - (1 << bit)];
      }
    }
    parents.push(node);
    for (const next of graph[node]) {
      if (parents.length >= 2 && next === parents[parents.length - 2]) {
        continue;
      }
      dfs(next, parents, depth + 1);
    }
    parents.pop();
  }

  function getKthParent(node, k) {
    if (!k) return node;
    let bit = 0;
    while ((1 << (bit + 1)) <= k) bit++;
    return getKthParent(binaryParents[node][bit], k & (~(1 << bit)));
  }

  function lca(a, b) {
    if (depths[a] > depths[b]) return lca(b, a);
    b = getKthParent(b, depths[b] - depths[a]);
    if (a === b) return a;
    for (let i = binaryParents[a].length - 1; i >= 0; i--) {
      if (binaryParents[a][i] !== binaryParents[b][i]) {
        a = binaryParents[a][i];
        b = binaryParents[b][i];
      }
    }
    return binaryParents[a][0];
  }
};
