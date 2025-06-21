/**
 * 651. 4 Keys Keyboard
 * https://leetcode.com/problems/4-keys-keyboard/
 * Difficulty: Medium
 *
 * Imagine you have a special keyboard with the following keys:
 * - A: Print one 'A' on the screen.
 * - Ctrl-A: Select the whole screen.
 * - Ctrl-C: Copy selection to buffer.
 * - Ctrl-V: Print buffer on screen appending it after what has already been printed.
 *
 * Given an integer n, return the maximum number of 'A' you can print on the screen with at
 * most n presses on the keys.
 */

/**
 * @param {number} n
 * @return {number}
 */
var maxA = function(n) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1));
    }
  }

  return dp[n];
};
