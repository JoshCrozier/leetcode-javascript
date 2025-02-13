/**
 * 2462. Total Cost to Hire K Workers
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array costs where costs[i] is the cost of hiring
 * the ith worker.
 *
 * You are also given two integers k and candidates. We want to hire exactly k workers
 * according to the following rules:
 * - You will run k sessions and hire exactly one worker in each session.
 * - In each hiring session, choose the worker with the lowest cost from either the first
 *   candidates workers or the last candidates workers. Break the tie by the smallest index.
 *   - For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring
 *     session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
 *   - In the second hiring session, we will choose 1st worker because they have the same
 *     lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note
 *     that the indexing may be changed in the process.
 * - If there are fewer than candidates workers remaining, choose the worker with the lowest
 *   cost among them. Break the tie by the smallest index.
 * - A worker can only be chosen once.
 *
 * Return the total cost to hire exactly k workers.
 */

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
  const queue = new PriorityQueue({ compare: (a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  }});

  costs.forEach((cost, index) => {
    if (index < candidates || index >= costs.length - candidates) {
      queue.enqueue([cost, index]);
    }
  });

  let result = 0;
  for (let i = 0, count = candidates, diff = costs.length - candidates - 1; i < k; i++) {
    const worker = queue.dequeue();
    result += worker[0];

    if (count <= diff) {
      let status = null;
      if (worker[1] < count) {
        status = [costs[count], count];
        count++;
      } else {
        status = [costs[diff], diff];
        diff--;
      }
      queue.enqueue(status);
    }
  }

  return result;
};
