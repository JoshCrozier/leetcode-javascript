/**
 * 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Difficulty: Medium
 *
 * You are given an integer array prices where prices[i] is the price of a given
 * stock on the ith day.
 *
 * On each day, you may decide to buy and/or sell the stock. You can only hold at
 * most one share of the stock at any time. However, you can buy it then immediately
 * sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return prices.reduce((result, price, i) => {
    return prices[i - 1] < price ? result + (price - prices[i - 1]) : result;
  }, 0);
};
