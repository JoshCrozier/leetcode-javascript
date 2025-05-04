/**
 * 1986. Minimum Number of Work Sessions to Finish the Tasks
 * https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/
 * Difficulty: Medium
 *
 * There are n tasks assigned to you. The task times are represented as an integer array tasks of
 * length n, where the ith task takes tasks[i] hours to finish. A work session is when you work
 * for at most sessionTime consecutive hours and then take a break.
 *
 * You should finish the given tasks in a way that satisfies the following conditions:
 * - If you start a task in a work session, you must complete it in the same work session.
 * - You can start a new task immediately after finishing the previous one.
 * - You may complete the tasks in any order.
 *
 * Given tasks and sessionTime, return the minimum number of work sessions needed to finish all the
 * tasks following the conditions above.
 *
 * The tests are generated such that sessionTime is greater than or equal to the maximum element
 * in tasks[i].
 */

/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
  const n = tasks.length;
  const dp = new Array(1 << n).fill(n + 1);
  dp[0] = 0;

  for (let mask = 1; mask < 1 << n; mask++) {
    let time = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        time += tasks[i];
      }
    }

    for (let subset = mask; subset; subset = (subset - 1) & mask) {
      if (subset === mask) continue;
      let subsetTime = 0;
      for (let i = 0; i < n; i++) {
        if (subset & (1 << i)) {
          subsetTime += tasks[i];
        }
      }
      if (subsetTime <= sessionTime) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ subset] + 1);
      }
    }

    if (time <= sessionTime) {
      dp[mask] = 1;
    }
  }

  return dp[(1 << n) - 1];
};
