/**
 * 2907. Maximum Profitable Triplets With Increasing Prices I
 * https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/
 * Difficulty: Medium
 *
 * Given the 0-indexed arrays prices and profits of length n. There are n items in an store
 * where the ith item has a price of prices[i] and a profit of profits[i].
 *
 * We have to pick three items with the following condition:
 * - prices[i] < prices[j] < prices[k] where i < j < k.
 *
 * If we pick items with indices i, j and k satisfying the above condition, the profit
 * would be profits[i] + profits[j] + profits[k].
 *
 * Return the maximum profit we can get, and -1 if it's not possible to pick three items
 * with the given condition.
 */

/**
 * @param {number[]} prices
 * @param {number[]} profits
 * @return {number}
 */
var maxProfit = function(prices, profits) {
  const n = prices.length;
  let result = -1;

  for (let j = 1; j < n - 1; j++) {
    let maxLeftProfit = 0;
    let maxRightProfit = 0;
    let hasLeft = false;
    let hasRight = false;

    for (let i = 0; i < j; i++) {
      if (prices[i] < prices[j]) {
        maxLeftProfit = Math.max(maxLeftProfit, profits[i]);
        hasLeft = true;
      }
    }

    for (let k = j + 1; k < n; k++) {
      if (prices[j] < prices[k]) {
        maxRightProfit = Math.max(maxRightProfit, profits[k]);
        hasRight = true;
      }
    }

    if (hasLeft && hasRight) {
      const tripletProfit = maxLeftProfit + profits[j] + maxRightProfit;
      result = Math.max(result, tripletProfit);
    }
  }

  return result;
};
