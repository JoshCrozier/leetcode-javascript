/**
 * 1246. Palindrome Removal
 * https://leetcode.com/problems/palindrome-removal/
 * Difficulty: Hard
 *
 * You are given an integer array arr.
 *
 * In one move, you can select a palindromic subarray arr[i], arr[i + 1], ..., arr[j]
 * where i <= j, and remove that subarray from the given array. Note that after removing
 * a subarray, the elements on the left and on the right of that subarray move to fill
 * the gap left by the removal.
 *
 * Return the minimum number of moves needed to remove all numbers from the array.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var minimumMoves = function(arr) {
  const n = arr.length;
  const dp = new Array(n).fill().map(() => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;

      if (arr[i] === arr[j]) {
        if (length === 2) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
      }
    }
  }

  return dp[0][n - 1];
};
