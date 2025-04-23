/**
 * 1627. Graph Connectivity With Threshold
 * https://leetcode.com/problems/graph-connectivity-with-threshold/
 * Difficulty: Hard
 *
 * We have n cities labeled from 1 to n. Two different cities with labels x and y are directly
 * connected by a bidirectional road if and only if x and y share a common divisor strictly
 * greater than some threshold. More formally, cities with labels x and y have a road between
 * them if there exists an integer z such that all of the following are true:
 * - x % z == 0,
 * - y % z == 0, and
 * - z > threshold.
 *
 * Given the two integers, n and threshold, and an array of queries, you must determine for each
 * queries[i] = [ai, bi] if cities ai and bi are connected directly or indirectly. (i.e. there
 * is some path between them).
 *
 * Return an array answer, where answer.length == queries.length and answer[i] is true if for
 * the ith query, there is a path between ai and bi, or answer[i] is false if there is no path.
 */

/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {
  const parent = new Array(n + 1).fill().map((_, i) => i);

  for (let z = threshold + 1; z <= n; z++) {
    for (let x = z; x <= n; x += z) {
      union(x, z);
    }
  }

  return queries.map(([a, b]) => find(a) === find(b));

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    parent[find(x)] = find(y);
  }
};
