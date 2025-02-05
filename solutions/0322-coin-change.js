/**
 * 322. Coin Change
 * https://leetcode.com/problems/coin-change/
 * Difficulty: Medium
 *
 * You are given an integer array coins representing coins of different denominations and an
 * integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of
 * money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const counts = new Array(amount + 1).fill(amount + 1);
  counts[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        counts[i] = Math.min(counts[i], 1 + counts[i - coins[j]]);
      }
    }
  }

  return counts[amount] !== amount + 1 ? counts[amount] : -1;
};
