/**
 * 2432. The Employee That Worked on the Longest Task
 * https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
 * Difficulty: Easy
 *
 * There are n employees, each with a unique id from 0 to n - 1.
 *
 * You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:
 * - idi is the id of the employee that worked on the ith task, and
 * - leaveTimei is the time at which the employee finished the ith task. All the values
 *   leaveTimei are unique.
 *
 * Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th
 * task starts at time 0.
 *
 * Return the id of the employee that worked the task with the longest time. If there is a tie
 * between two or more employees, return the smallest id among them.
 */

/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
  let maxDuration = 0;
  let result = n;
  let startTime = 0;

  for (const [employeeId, endTime] of logs) {
    const duration = endTime - startTime;
    if (duration > maxDuration || (duration === maxDuration && employeeId < result)) {
      maxDuration = duration;
      result = employeeId;
    }
    startTime = endTime;
  }

  return result;
};
