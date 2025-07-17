/**
 * 2969. Minimum Number of Coins for Fruits II
 * https://leetcode.com/problems/minimum-number-of-coins-for-fruits-ii/
 * Difficulty: Hard
 *
 * You are at a fruit market with different types of exotic fruits on display.
 *
 * You are given a 1-indexed array prices, where prices[i] denotes the number of coins
 * needed to purchase the ith fruit.
 *
 * The fruit market has the following offer:
 * - If you purchase the ith fruit at prices[i] coins, you can get the next i fruits for free.
 *
 * Note that even if you can take fruit j for free, you can still purchase it for prices[j]
 * coins to receive a new offer.
 *
 * Return the minimum number of coins needed to acquire all the fruits.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
  const n = prices.length;
  const dp = new Array(n);
  const deque = [];

  dp[0] = prices[0];
  deque.push(0);

  for (let i = 1; i < n; i++) {
    dp[i] = dp[deque[0]] + prices[i];

    while (deque.length > 0 && deque[0] + deque[0] + 1 < i) {
      deque.shift();
    }
    while (deque.length > 0 && dp[deque[deque.length - 1]] >= dp[i]) {
      deque.pop();
    }

    deque.push(i);
  }

  return dp[deque[0]];
};
