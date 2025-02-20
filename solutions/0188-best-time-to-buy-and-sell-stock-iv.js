/**
 * 188. Best Time to Buy and Sell Stock IV
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 * Difficulty: Hard
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on
 * the ith day, and an integer k.
 *
 * Find the maximum profit you can achieve. You may complete at most k transactions: i.e.
 * you may buy at most k times and sell at most k times.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell
 * the stock before you buy again).
 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (prices.length < 2 || k === 0) return 0;

  if (k >= prices.length / 2) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      profit += prices[i] > prices[i - 1] ? (prices[i] - prices[i - 1]) : 0;
    }
    return profit;
  }

  const buy = new Array(k + 1).fill(-Infinity);
  const sell = new Array(k + 1).fill(0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = k; j >= 1; j--) {
      sell[j] = Math.max(sell[j], buy[j] + prices[i]);
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
    }
  }

  return sell[k];
};
