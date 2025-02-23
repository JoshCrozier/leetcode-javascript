/**
 * 375. Guess Number Higher or Lower II
 * https://leetcode.com/problems/guess-number-higher-or-lower-ii/
 * Difficulty: Medium
 *
 * We are playing the Guessing Game. The game will work as follows:
 * 1. I pick a number between 1 and n.
 * 2. You guess a number.
 * 3. If you guess the right number, you win the game.
 * 4. If you guess the wrong number, then I will tell you whether the number I picked is higher
 *    or lower, and you will continue guessing.
 * 5. Every time you guess a wrong number x, you will pay x dollars. If you run out of money,
 *    you lose the game.
 *
 * Given a particular n, return the minimum amount of money you need to guarantee a win
 * regardless of what number I pick.
 */

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      const k = j + i - 1;
      let min = Infinity;
      for (let pivot = j; pivot < k; pivot++) {
        min = Math.min(min, pivot + Math.max(dp[j][pivot - 1], dp[pivot + 1][k]));
      }
      dp[j][k] = min;
    }
  }

  return dp[1][n];
};
