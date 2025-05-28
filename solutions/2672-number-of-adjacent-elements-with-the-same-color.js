/**
 * 2672. Number of Adjacent Elements With the Same Color
 * https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/
 * Difficulty: Medium
 *
 * You are given an integer n representing an array colors of length n where all elements
 * are set to 0's meaning uncolored. You are also given a 2D integer array queries where
 * queries[i] = [indexi, colori]. For the ith query:
 * - Set colors[indexi] to colori.
 * - Count the number of adjacent pairs in colors which have the same color (regardless of colori).
 *
 * Return an array answer of the same length as queries where answer[i] is the answer to the ith
 * query.
 */

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
  const colors = new Array(n).fill(0);
  const result = new Array(queries.length).fill(0);
  let sameColorPairs = 0;

  for (let i = 0; i < queries.length; i++) {
    const [index, color] = queries[i];
    const prevColor = colors[index];

    if (prevColor !== 0) {
      if (index > 0 && colors[index - 1] === prevColor) sameColorPairs--;
      if (index < n - 1 && colors[index + 1] === prevColor) sameColorPairs--;
    }

    colors[index] = color;

    if (index > 0 && colors[index - 1] === color) sameColorPairs++;
    if (index < n - 1 && colors[index + 1] === color) sameColorPairs++;

    result[i] = sameColorPairs;
  }

  return result;
};
