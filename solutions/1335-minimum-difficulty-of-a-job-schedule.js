/**
 * 1335. Minimum Difficulty of a Job Schedule
 * https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
 * Difficulty: Hard
 *
 * You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job,
 * you have to finish all the jobs j where 0 <= j < i).
 *
 * You have to finish at least one task every day. The difficulty of a job schedule is the sum of
 * difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a
 * job done on that day.
 *
 * You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job
 * is jobDifficulty[i].
 *
 * Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs
 * return -1.
 */

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) return -1;

  const dp = new Array(d + 1).fill().map(() => new Array(n + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let days = 1; days <= d; days++) {
    for (let i = days; i <= n; i++) {
      let maxDifficulty = 0;
      for (let j = i - 1; j >= days - 1; j--) {
        maxDifficulty = Math.max(maxDifficulty, jobDifficulty[j]);
        dp[days][i] = Math.min(dp[days][i], dp[days - 1][j] + maxDifficulty);
      }
    }
  }

  return dp[d][n] === Infinity ? -1 : dp[d][n];
};
