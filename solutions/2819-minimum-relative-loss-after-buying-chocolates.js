/**
 * 2819. Minimum Relative Loss After Buying Chocolates
 * https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates/
 * Difficulty: Hard
 *
 * You are given an integer array prices, which shows the chocolate prices and a 2D integer
 * array queries, where queries[i] = [ki, mi].
 *
 * Alice and Bob went to buy some chocolates, and Alice suggested a way to pay for them, and
 * Bob agreed.
 *
 * The terms for each query are as follows:
 * - If the price of a chocolate is less than or equal to ki, Bob pays for it.
 * - Otherwise, Bob pays ki of it, and Alice pays the rest.
 *
 * Bob wants to select exactly mi chocolates such that his relative loss is minimized, more
 * formally, if, in total, Alice has paid ai and Bob has paid bi, Bob wants to minimize bi - ai.
 *
 * Return an integer array ans where ans[i] is Bob's minimum relative loss possible for queries[i].
 */

/**
 * @param {number[]} prices
 * @param {number[][]} queries
 * @return {number[]}
 */
var minimumRelativeLosses = function(prices, queries) {
  prices.sort((a, b) => a - b);
  const n = prices.length;
  const result = [];

  const prefixSum = [0];
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + prices[i];
  }

  for (const [k, m] of queries) {
    const split = Math.min(bisectLeft(prices, k), m);
    const cut = bisectLeftWithKey(split, 2 * k, x => prices[x] + prices[n - m + x]);
    const relativeLoss = (m - cut) * 2 * k + prefixSum[n - m + cut] + prefixSum[cut] - prefixSum[n];
    result.push(relativeLoss);
  }

  return result;

  function bisectLeft(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  function bisectLeftWithKey(length, target, keyFunc) {
    let left = 0;
    let right = length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (keyFunc(mid) < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
};
