/**
 * 2921. Maximum Profitable Triplets With Increasing Prices II
 * https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/
 * Difficulty: Hard
 *
 * Given the 0-indexed arrays prices and profits of length n. There are n items in an store
 * where the ith item has a price of prices[i] and a profit of profits[i].
 *
 * We have to pick three items with the following condition:
 * - prices[i] < prices[j] < prices[k] where i < j < k.
 *
 * If we pick items with indices i, j and k satisfying the above condition, the profit would
 * be profits[i] + profits[j] + profits[k].
 *
 * Return the maximum profit we can get, and -1 if it's not possible to pick three items with
 * the given condition.
 */

/**
 * @param {number[]} prices
 * @param {number[]} profits
 * @return {number}
 */
var maxProfit = function(prices, profits) {
  const bit1 = new Array(5001).fill(0);
  const bit2 = new Array(5001).fill(0);
  let result = -1;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const profit = profits[i];
    const maxLeft = query(bit1, price - 1);
    const maxPair = query(bit2, price - 1);

    if (maxPair > 0) {
      result = Math.max(result, maxPair + profit);
    }

    update(bit1, price, profit);

    if (maxLeft > 0) {
      update(bit2, price, profit + maxLeft);
    }
  }

  return result;

  function query(bit, price) {
    let maxValue = 0;
    while (price > 0) {
      maxValue = Math.max(maxValue, bit[price]);
      price &= price - 1;
    }
    return maxValue;
  }

  function update(bit, price, value) {
    while (price < 5001) {
      bit[price] = Math.max(bit[price], value);
      price += price & (-price);
    }
  }
};
