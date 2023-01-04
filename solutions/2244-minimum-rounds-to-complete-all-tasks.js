/**
 * 2244. Minimum Rounds to Complete All Tasks
 * https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level
 * of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.
 *
 * Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to
 * complete all the tasks.
 */

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const map = new Map();
  let result = 0;

  tasks.forEach(task => map.set(task, map.has(task) ? map.get(task) + 1 : 1));

  for (const count of map.values()) {
    if (count < 2) {
      return -1;
    }
    result += Math.floor(count / 3) + (count % 3 === 0 ? 0 : 1);
  }

  return result;
};
