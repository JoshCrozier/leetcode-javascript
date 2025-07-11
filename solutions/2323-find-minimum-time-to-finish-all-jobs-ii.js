/**
 * 2323. Find Minimum Time to Finish All Jobs II
 * https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays jobs and workers of equal length, where jobs[i]
 * is the amount of time needed to complete the ith job, and workers[j] is the amount of time
 * the jth worker can work each day.
 *
 * Each job should be assigned to exactly one worker, such that each worker completes exactly
 * one job.
 *
 * Return the minimum number of days needed to complete all the jobs after assignment.
 */

/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function(jobs, workers) {
  jobs.sort((a, b) => b - a);
  workers.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < jobs.length; i++) {
    const daysNeeded = Math.ceil(jobs[i] / workers[i]);
    result = Math.max(result, daysNeeded);
  }

  return result;
};
