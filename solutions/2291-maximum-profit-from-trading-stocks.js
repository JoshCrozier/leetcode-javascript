/**
 * 2291. Maximum Profit From Trading Stocks
 * https://leetcode.com/problems/maximum-profit-from-trading-stocks/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays of the same length present and future where
 * present[i] is the current price of the ith stock and future[i] is the price of the ith
 * stock a year in the future. You may buy each stock at most once. You are also given an
 * integer budget representing the amount of money you currently have.
 *
 * Return the maximum amount of profit you can make.
 */

/**
 * @param {number[]} present
 * @param {number[]} future
 * @param {number} budget
 * @return {number}
 */
var maximumProfit = function(present, future, budget) {
  const stocks = present.map((price, i) => ({
    cost: price,
    profit: future[i] - price
  })).filter(stock => stock.profit > 0)
    .sort((a, b) => b.profit - a.profit);

  const dp = new Array(budget + 1).fill(0);
  for (const stock of stocks) {
    for (let money = budget; money >= stock.cost; money--) {
      dp[money] = Math.max(dp[money], dp[money - stock.cost] + stock.profit);
    }
  }

  return dp[budget];
};
