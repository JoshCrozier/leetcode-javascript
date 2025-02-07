/**
 * 3160. Find the Number of Distinct Colors Among the Balls
 * https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/
 * Difficulty: Medium
 *
 * You are given an integer limit and a 2D array queries of size n x 2.
 *
 * There are limit + 1 balls with distinct labels in the range [0, limit]. Initially,
 * all balls are uncolored. For every query in queries that is of the form [x, y],
 * you mark ball x with the color y. After each query, you need to find the number
 * of distinct colors among the balls.
 *
 * Return an array result of length n, where result[i] denotes the number of distinct
 * colors after ith query.
 *
 * Note that when answering a query, lack of a color will not be considered as a color.
 */

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
  const result = [];

  for (let i = 0, colors = new Map(), counts = new Map(); i < queries.length; i++) {
    const [index, color] = queries[i];
    if (colors.has(index)) {
      const prev = colors.get(index);
      counts.set(prev, counts.get(prev) - 1);
      if (!counts.get(prev)) counts.delete(prev);
    }
    colors.set(index, color);
    counts.set(color, (counts.get(color) ?? 0) + 1);
    result.push(counts.size);
  }

  return result;
};
