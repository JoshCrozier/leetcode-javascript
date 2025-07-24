/**
 * 3476. Maximize Profit from Task Assignment
 * https://leetcode.com/problems/maximize-profit-from-task-assignment/
 * Difficulty: Medium
 *
 * You are given an integer array workers, where workers[i] represents the skill level of
 * the ith worker. You are also given a 2D integer array tasks, where:
 * - tasks[i][0] represents the skill requirement needed to complete the task.
 * - tasks[i][1] represents the profit earned from completing the task.
 *
 * Each worker can complete at most one task, and they can only take a task if their skill
 * level is equal to the task's skill requirement. An additional worker joins today who can
 * take up any task, regardless of the skill requirement.
 *
 * Return the maximum total profit that can be earned by optimally assigning the tasks to
 * the workers.
 */

/**
 * @param {number[]} workers
 * @param {number[][]} tasks
 * @return {number}
 */
var maxProfit = function(workers, tasks) {
  const map = new Map();

  for (const [skill, profit] of tasks) {
    if (!map.has(skill)) {
      map.set(skill, []);
    }
    map.get(skill).push(profit);
  }

  for (const [skill, profits] of map) {
    profits.sort((a, b) => b - a);
  }

  let totalProfit = 0;

  for (const worker of workers) {
    if (map.has(worker) && map.get(worker).length > 0) {
      totalProfit += map.get(worker).shift();
      if (map.get(worker).length === 0) {
        map.delete(worker);
      }
    }
  }

  let maxRemainingProfit = 0;
  for (const profits of map.values()) {
    if (profits.length > 0) {
      maxRemainingProfit = Math.max(maxRemainingProfit, profits[0]);
    }
  }

  return totalProfit + maxRemainingProfit;
};
