/**
 * 2898. Maximum Linear Stock Score
 * https://leetcode.com/problems/maximum-linear-stock-score/
 * Difficulty: Medium
 *
 * Given a 1-indexed integer array prices, where prices[i] is the price of a particular stock
 * on the ith day, your task is to select some of the elements of prices such that your
 * selection is linear.
 *
 * A selection indexes, where indexes is a 1-indexed integer array of length k which is a
 * subsequence of the array [1, 2, ..., n], is linear if:
 * - For every 1 < j <= k,
 *   prices[indexes[j]] - prices[indexes[j - 1]] == indexes[j] - indexes[j - 1].
 *
 * A subsequence is an array that can be derived from another array by deleting some or no
 * elements without changing the order of the remaining elements.
 *
 * The score of a selection indexes, is equal to the sum of the following array:
 * [prices[indexes[1]], prices[indexes[2]], ..., prices[indexes[k]].
 *
 * Return the maximum score that a linear selection can have.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxScore = function(prices) {
  const values = prices.map((price, index) => price - index);
  const map = new Map();

  for (let i = 0; i < prices.length; i++) {
    const value = values[i];
    map.set(value, (map.get(value) || 0) + prices[i]);
  }

  return Math.max(...map.values());
};
