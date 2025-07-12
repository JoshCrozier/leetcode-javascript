/**
 * 2445. Number of Nodes With Value One
 * https://leetcode.com/problems/number-of-nodes-with-value-one/
 * Difficulty: Medium
 *
 * There is an undirected connected tree with n nodes labeled from 1 to n and n - 1 edges.
 * You are given the integer n. The parent node of a node with a label v is the node with
 * the label floor (v / 2). The root of the tree is the node with the label 1.
 *
 * - For example, if n = 7, then the node with the label 3 has the node with the label
 *   floor(3 / 2) = 1 as its parent, and the node with the label 7 has the node with the
 *   label floor(7 / 2) = 3 as its parent.
 *
 * You are also given an integer array queries. Initially, every node has a value 0 on it.
 * For each query queries[i], you should flip all values in the subtree of the node with
 * the label queries[i].
 *
 * Return the total number of nodes with the value 1 after processing all the queries.
 *
 * Note that:
 * - Flipping the value of a node means that the node with the value 0 becomes 1 and vice versa.
 * - floor(x) is equivalent to rounding x down to the nearest integer.
 */

/**
 * @param {number} n
 * @param {number[]} queries
 * @return {number}
 */
var numberOfNodes = function(n, queries) {
  const flipCount = new Array(n + 1).fill(0);

  for (const query of queries) {
    flipCount[query]++;
  }

  let result = 0;
  for (let i = 1; i <= n; i++) {
    let totalFlips = 0;
    let current = i;

    while (current >= 1) {
      totalFlips += flipCount[current];
      current = Math.floor(current / 2);
    }

    if (totalFlips % 2 === 1) {
      result++;
    }
  }

  return result;
};
