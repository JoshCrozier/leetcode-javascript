/**
 * 2509. Cycle Length Queries in a Tree
 * https://leetcode.com/problems/cycle-length-queries-in-a-tree/
 * Difficulty: Hard
 *
 * You are given an integer n. There is a complete binary tree with 2n - 1 nodes. The root of
 * that tree is the node with the value 1, and every node with a value val in the range
 * [1, 2n - 1 - 1] has two children where:
 * - The left node has the value 2 * val, and
 * - The right node has the value 2 * val + 1.
 *
 * You are also given a 2D integer array queries of length m, where queries[i] = [ai, bi]. For
 * each query, solve the following problem:
 * 1. Add an edge between the nodes with values ai and bi.
 * 2. Find the length of the cycle in the graph.
 * 3. Remove the added edge between nodes with values ai and bi.
 *
 * Note that:
 * - A cycle is a path that starts and ends at the same node, and each edge in the path is
 *   visited only once.
 * - The length of a cycle is the number of edges visited in the cycle.
 * - There could be multiple edges between two nodes in the tree after adding the edge of
 *   the query.
 *
 * Return an array answer of length m where answer[i] is the answer to the ith query.
 */

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function(n, queries) {
  const result = [];

  for (const [a, b] of queries) {
    let x = a;
    let y = b;
    let pathLength = 1;

    while (x !== y) {
      if (x > y) {
        x = Math.floor(x / 2);
      } else {
        y = Math.floor(y / 2);
      }
      pathLength++;
    }

    result.push(pathLength);
  }

  return result;
};
