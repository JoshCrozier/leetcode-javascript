/**
 * 1866. Number of Ways to Rearrange Sticks With K Sticks Visible
 * https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/
 * Difficulty: Hard
 *
 * There are n uniquely-sized sticks whose lengths are integers from 1 to n. You want to arrange
 * the sticks such that exactly k sticks are visible from the left. A stick is visible from the
 * left if there are no longer sticks to the left of it.
 * - For example, if the sticks are arranged [1,3,2,5,4], then the sticks with lengths 1, 3,
 *   and 5 are visible from the left.
 *
 * Given n and k, return the number of such arrangements. Since the answer may be large, return
 * it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
  const modulo = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
  dp[0][0] = 1;

  for (let sticks = 1; sticks <= n; sticks++) {
    for (let visible = 0; visible <= k; visible++) {
      if (visible > sticks) continue;
      if (visible > 0) {
        dp[sticks][visible] = (dp[sticks][visible] + dp[sticks - 1][visible - 1]) % modulo;
      }
      dp[sticks][visible] = (dp[sticks][visible] + dp[sticks - 1][visible] * (sticks - 1)) % modulo;
    }
  }

  return dp[n][k];
};
