/**
 * 714. Best Time to Buy and Sell Stock with Transaction Fee
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * Difficulty: Medium
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day,
 * and an integer fee representing a transaction fee.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions as you like,
 * but you need to pay the transaction fee for each transaction.
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let result = 0;
  for (let i = 1, sell = -prices[0]; i < prices.length; i++) {
    result = Math.max(result, sell + prices[i] - fee);
    sell = Math.max(sell, result - prices[i]);
  }
  return result;
};
