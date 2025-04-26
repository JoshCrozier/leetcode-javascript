/**
 * 1697. Checking Existence of Edge Length Limited Paths
 * https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
 * Difficulty: Hard
 *
 * An undirected graph of n nodes is defined by edgeList, where edgeList[i] = [ui, vi, disi] denotes
 * an edge between nodes ui and vi with distance disi. Note that there may be multiple edges between
 * two nodes.
 *
 * Given an array queries, where queries[j] = [pj, qj, limitj], your task is to determine for each
 * queries[j] whether there is a path between pj and qj such that each edge on the path has a
 * distance strictly less than limitj.
 *
 * Return a boolean array answer, where answer.length == queries.length and the jth value of answer
 * is true if there is a path for queries[j] is true, and false otherwise.
 */

/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
  const parent = new Array(n).fill().map((_, i) => i);

  edgeList.sort((a, b) => a[2] - b[2]);
  const sortedQueries = queries.map((q, i) => [...q, i]).sort((a, b) => a[2] - b[2]);
  const result = new Array(queries.length).fill(false);

  let edgeIndex = 0;
  for (const [p, q, limit, index] of sortedQueries) {
    while (edgeIndex < edgeList.length && edgeList[edgeIndex][2] < limit) {
      union(edgeList[edgeIndex][0], edgeList[edgeIndex][1]);
      edgeIndex++;
    }
    result[index] = find(p) === find(q);
  }

  return result;

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
