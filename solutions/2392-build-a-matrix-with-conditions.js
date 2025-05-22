/**
 * 2392. Build a Matrix With Conditions
 * https://leetcode.com/problems/build-a-matrix-with-conditions/
 * Difficulty: Hard
 *
 * You are given a positive integer k. You are also given:
 * - a 2D integer array rowConditions of size n where rowConditions[i] = [abovei, belowi], and
 * - a 2D integer array colConditions of size m where colConditions[i] = [lefti, righti].
 *
 * The two arrays contain integers from 1 to k.
 *
 * You have to build a k x k matrix that contains each of the numbers from 1 to k exactly once.
 * The remaining cells should have the value 0.
 *
 * The matrix should also satisfy the following conditions:
 * - The number abovei should appear in a row that is strictly above the row at which the number
 *   belowi appears for all i from 0 to n - 1.
 * - The number lefti should appear in a column that is strictly left of the column at which the
 *   number righti appears for all i from 0 to m - 1.
 *
 * Return any matrix that satisfies the conditions. If no answer exists, return an empty matrix.
 */

/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
  const rowOrder = helper(rowConditions, k);
  if (!rowOrder.length) return [];

  const colOrder = helper(colConditions, k);
  if (!colOrder.length) return [];

  const matrix = Array.from({ length: k }, () => new Array(k).fill(0));
  const rowIndex = new Array(k + 1).fill(0);
  const colIndex = new Array(k + 1).fill(0);

  for (let i = 0; i < k; i++) {
    rowIndex[rowOrder[i]] = i;
    colIndex[colOrder[i]] = i;
  }

  for (let num = 1; num <= k; num++) {
    matrix[rowIndex[num]][colIndex[num]] = num;
  }

  return matrix;

  function helper(edges, size) {
    const graph = Array.from({ length: size + 1 }, () => []);
    const inDegree = new Array(size + 1).fill(0);
    for (const [u, v] of edges) {
      graph[u].push(v);
      inDegree[v]++;
    }

    const queue = [];
    for (let i = 1; i <= size; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    const order = [];
    while (queue.length) {
      const node = queue.shift();
      order.push(node);
      for (const next of graph[node]) {
        if (--inDegree[next] === 0) queue.push(next);
      }
    }

    return order.length === size ? order : [];
  }
};
