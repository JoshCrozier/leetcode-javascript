/**
 * 2327. Number of People Aware of a Secret
 * https://leetcode.com/problems/number-of-people-aware-of-a-secret/
 * Difficulty: Medium
 *
 * On day 1, one person discovers a secret.
 *
 * You are given an integer delay, which means that each person will share the secret with a new
 * person every day, starting from delay days after discovering the secret. You are also given
 * an integer forget, which means that each person will forget the secret forget days after
 * discovering it. A person cannot share the secret on the same day they forgot it, or on any
 * day afterwards.
 *
 * Given an integer n, return the number of people who know the secret at the end of day n.
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let day = 1; day <= n; day++) {
    if (dp[day] === 0) continue;

    for (let shareDay = day + delay; shareDay < day + forget && shareDay <= n; shareDay++) {
      dp[shareDay] = (dp[shareDay] + dp[day]) % MOD;
    }
  }

  let result = 0;
  for (let day = Math.max(1, n - forget + 1); day <= n; day++) {
    result = (result + dp[day]) % MOD;
  }

  return result;
};
