/**
 * 309. Best Time to Buy and Sell Stock with Cooldown
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * Difficulty: Medium
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions as you like
 * (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
 * - After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock
 * before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let remaining = 0;

  for (let i = 0, limit = -Infinity; i < prices.length; i++) {
    limit = Math.max(limit, remaining - prices[i]);
    remaining = Math.max(remaining, result);
    result = limit + prices[i];
  }

  return Math.max(result, remaining);
};
