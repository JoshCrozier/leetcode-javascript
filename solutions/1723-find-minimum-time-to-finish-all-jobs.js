/**
 * 1723. Find Minimum Time to Finish All Jobs
 * https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/
 * Difficulty: Hard
 *
 * You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete
 * the ith job.
 *
 * There are k workers that you can assign jobs to. Each job should be assigned to exactly one
 * worker. The working time of a worker is the sum of the time it takes to complete all jobs
 * assigned to them. Your goal is to devise an optimal assignment such that the maximum working
 * time of any worker is minimized.
 *
 * Return the minimum possible maximum working time of any assignment.
 */

/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
  const n = jobs.length;
  const workerTimes = new Array(k).fill(0);
  let result = Infinity;

  jobs.sort((a, b) => b - a);
  backtrack(0, 0);

  return result;

  function backtrack(jobIndex, maxTime) {
    if (jobIndex === n) {
      result = Math.min(result, maxTime);
      return;
    }

    if (maxTime >= result) return;

    for (let i = 0; i < k; i++) {
      if (workerTimes[i] + jobs[jobIndex] >= result) continue;

      workerTimes[i] += jobs[jobIndex];
      backtrack(jobIndex + 1, Math.max(maxTime, workerTimes[i]));
      workerTimes[i] -= jobs[jobIndex];

      if (workerTimes[i] === 0) break;
    }
  }
};
