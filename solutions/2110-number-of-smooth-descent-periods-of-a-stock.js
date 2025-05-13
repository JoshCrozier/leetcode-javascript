/**
 * 2110. Number of Smooth Descent Periods of a Stock
 * https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/
 * Difficulty: Medium
 *
 * You are given an integer array prices representing the daily price history of a stock,
 * where prices[i] is the stock price on the ith day.
 *
 * A smooth descent period of a stock consists of one or more contiguous days such that the
 * price on each day is lower than the price on the preceding day by exactly 1. The first
 * day of the period is exempted from this rule.
 *
 * Return the number of smooth descent periods.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
  let result = 1;
  let currentLength = 1;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] === prices[i - 1] - 1) {
      currentLength++;
    } else {
      currentLength = 1;
    }
    result += currentLength;
  }

  return result;
};
