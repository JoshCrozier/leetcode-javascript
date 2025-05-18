/**
 * 2312. Selling Pieces of Wood
 * https://leetcode.com/problems/selling-pieces-of-wood/
 * Difficulty: Hard
 *
 * You are given two integers m and n that represent the height and width of a rectangular piece
 * of wood. You are also given a 2D integer array prices, where prices[i] = [hi, wi, pricei]
 * indicates you can sell a rectangular piece of wood of height hi and width wi for pricei dollars.
 *
 * To cut a piece of wood, you must make a vertical or horizontal cut across the entire height
 * or width of the piece to split it into two smaller pieces. After cutting a piece of wood into
 * some number of smaller pieces, you can sell pieces according to prices. You may sell multiple
 * pieces of the same shape, and you do not have to sell all the shapes. The grain of the wood
 * makes a difference, so you cannot rotate a piece to swap its height and width.
 *
 * Return the maximum money you can earn after cutting an m x n piece of wood.
 *
 * Note that you can cut the piece of wood as many times as you want.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (const [h, w, price] of prices) {
    dp[h][w] = price;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k < i; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j]);
      }
      for (let k = 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k]);
      }
    }
  }

  return dp[m][n];
};
