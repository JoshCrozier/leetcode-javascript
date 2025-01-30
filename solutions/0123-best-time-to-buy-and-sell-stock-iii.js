/**
 * 123. Best Time to Buy and Sell Stock III
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 * Difficulty: Hard
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * Find the maximum profit you can achieve. You may complete at most two transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the
 * stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const costs = [prices[0]];
  const profits = new Array(prices.length).fill(0);

  for (let i = 0; i < 2; i++) {
    for (let j = 1; j < prices.length; j++) {
      costs[j] = Math.min(costs[j - 1], prices[j] - profits[j]);
      profits[j] = Math.max(profits[j - 1], prices[j] - costs[j]);
    }
  }

  return profits[profits.length - 1];
};
