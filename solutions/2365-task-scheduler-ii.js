/**
 * 2365. Task Scheduler II
 * https://leetcode.com/problems/task-scheduler-ii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of positive integers tasks, representing tasks that need
 * to be completed in order, where tasks[i] represents the type of the ith task.
 *
 * You are also given a positive integer space, which represents the minimum number of days
 * that must pass after the completion of a task before another task of the same type can be
 * performed.
 *
 * Each day, until all tasks have been completed, you must either:
 * - Complete the next task from tasks, or
 * - Take a break.
 *
 * Return the minimum number of days needed to complete all tasks.
 */

/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
  const map = new Map();
  let result = 0;

  for (const task of tasks) {
    result++;
    if (map.has(task)) {
      const lastDay = map.get(task);
      if (result - lastDay <= space) {
        result = lastDay + space + 1;
      }
    }
    map.set(task, result);
  }

  return result;
};
