/**
 * 2398. Maximum Number of Robots Within Budget
 * https://leetcode.com/problems/maximum-number-of-robots-within-budget/
 * Difficulty: Hard
 *
 * You have n robots. You are given two 0-indexed integer arrays, chargeTimes and runningCosts,
 * both of length n. The ith robot costs chargeTimes[i] units to charge and costs runningCosts[i]
 * units to run. You are also given an integer budget.
 *
 * The total cost of running k chosen robots is equal to max(chargeTimes) + k * sum(runningCosts),
 * where max(chargeTimes) is the largest charge cost among the k robots and sum(runningCosts) is
 * the sum of running costs among the k robots.
 *
 * Return the maximum number of consecutive robots you can run such that the total cost does not
 * exceed budget.
 */

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
  const n = chargeTimes.length;
  let left = 0;
  let result = 0;
  let runningSum = 0;
  const queue = [];

  for (let right = 0; right < n; right++) {
    runningSum += runningCosts[right];

    while (queue.length > 0 && chargeTimes[queue[queue.length - 1]] <= chargeTimes[right]) {
      queue.pop();
    }
    queue.push(right);

    while (left <= right) {
      const maxCharge = chargeTimes[queue[0]];
      const totalCost = maxCharge + (right - left + 1) * runningSum;

      if (totalCost <= budget) {
        result = Math.max(result, right - left + 1);
        break;
      }

      if (queue[0] === left) {
        queue.shift();
      }
      runningSum -= runningCosts[left];
      left++;
    }
  }

  return result;
};
