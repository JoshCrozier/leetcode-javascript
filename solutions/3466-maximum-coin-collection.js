/**
 * 3466. Maximum Coin Collection
 * https://leetcode.com/problems/maximum-coin-collection/
 * Difficulty: Medium
 *
 * Mario drives on a two-lane freeway with coins every mile. You are given two integer arrays,
 * lane1 and lane2, where the value at the ith index represents the number of coins he gains
 * or loses in the ith mile in that lane.
 * - If Mario is in lane 1 at mile i and lane1[i] > 0, Mario gains lane1[i] coins.
 * - If Mario is in lane 1 at mile i and lane1[i] < 0, Mario pays a toll and loses abs(lane1[i])
 *   coins.
 * - The same rules apply for lane2.
 *
 * Mario can enter the freeway anywhere and exit anytime after traveling at least one mile. Mario
 * always enters the freeway on lane 1 but can switch lanes at most 2 times.
 *
 * A lane switch is when Mario goes from lane 1 to lane 2 or vice versa.
 *
 * Return the maximum number of coins Mario can earn after performing at most 2 lane switches.
 *
 * Note: Mario can switch lanes immediately upon entering or just before exiting the freeway.
 */

/**
 * @param {number[]} lane1
 * @param {number[]} lane2
 * @return {number}
 */
var maxCoins = function(lane1, lane2) {
  const n = lane1.length;
  const dp = new Array(n).fill().map(() => new Array(2).fill().map(() => new Array(3).fill(0)));

  dp[0][0][2] = lane1[0];
  dp[0][0][0] = lane1[0];
  dp[0][1][1] = lane2[0];

  let result = Math.max(dp[0][0][2], dp[0][1][1]);
  for (let i = 1; i < n; i++) {
    dp[i][0][0] = Math.max(dp[i - 1][0][0], dp[i - 1][1][1]) + lane1[i];

    dp[i][0][2] = Math.max(dp[i - 1][0][2] + lane1[i], lane1[i]);

    dp[i][1][1] = Math.max(Math.max(dp[i - 1][0][2], dp[i - 1][1][1]), 0) + lane2[i];

    const currentMax = Math.max(Math.max(dp[i][0][0], dp[i][0][2]), dp[i][1][1]);
    result = Math.max(result, currentMax);
  }

  return result;
};
