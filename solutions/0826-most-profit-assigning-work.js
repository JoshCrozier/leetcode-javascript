/**
 * 826. Most Profit Assigning Work
 * https://leetcode.com/problems/most-profit-assigning-work/
 * Difficulty: Medium
 *
 * You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:
 * - difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
 * - worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with
 *   difficulty at most worker[j]).
 *
 * Every worker can be assigned at most one job, but one job can be completed multiple times.
 * - For example, if three workers attempt the same job that pays $1, then the total profit will
 *   be $3. If a worker cannot complete any job, their profit is $0.
 *
 * Return the maximum profit we can achieve after assigning the workers to the jobs.
 */

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const jobs = difficulty.map((d, i) => [d, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);

  const n = jobs.length;
  const bestProfit = new Array(n);
  let maxProfit = 0;

  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, jobs[i][1]);
    bestProfit[i] = [jobs[i][0], maxProfit];
  }

  return worker.reduce((total, ability) => {
    let left = 0;
    let right = n - 1;

    while (left <= right) {
      const mid = (left + right) >> 1;
      bestProfit[mid][0] <= ability ? left = mid + 1 : right = mid - 1;
    }

    return total + (right >= 0 ? bestProfit[right][1] : 0);
  }, 0);
};
