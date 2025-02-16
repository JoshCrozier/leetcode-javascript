/**
 * 441. Arranging Coins
 * https://leetcode.com/problems/arranging-coins/
 * Difficulty: Easy
 *
 * You have n coins and you want to build a staircase with these coins. The staircase consists
 * of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you will build.
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let count = 0;
  for (; count <= n; count++) {
    n -= count;
  }
  return count - 1;
};
