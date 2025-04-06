/**
 * 1235. Maximum Profit in Job Scheduling
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling/
 * Difficulty: Hard
 *
 * We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i],
 * obtaining a profit of profit[i].
 *
 * You're given the startTime, endTime and profit arrays, return the maximum profit you can
 * take such that there are no two jobs in the subset with overlapping time range.
 *
 * If you choose a job that ends at time X you will be able to start another job that starts
 * at time X.
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const jobCount = startTime.length;
  const indices = Array.from({ length: jobCount }, (_, i) => i)
    .sort((a, b) => startTime[a] - startTime[b]);

  const maxProfit = new Array(jobCount + 1).fill(0);

  for (let i = jobCount - 1; i >= 0; i--) {
    let left = i + 1;
    let right = jobCount - 1;
    const currentEnd = endTime[indices[i]];

    while (left <= right) {
      const mid = left + right >> 1;
      if (startTime[indices[mid]] < currentEnd) left = mid + 1;
      else right = mid - 1;
    }

    maxProfit[i] = Math.max(maxProfit[i + 1], profit[indices[i]] + maxProfit[left]);
  }

  return maxProfit[0];
};
