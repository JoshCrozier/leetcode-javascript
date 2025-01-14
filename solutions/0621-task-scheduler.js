/**
 * 621. Task Scheduler
 * https://leetcode.com/problems/task-scheduler/
 * Difficulty: Medium
 *
 * You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n.
 * Each CPU interval can be idle or allow the completion of one task. Tasks can be completed
 * in any order, but there's a constraint: there has to be a gap of at least n intervals
 * between two tasks with the same label.
 *
 * Return the minimum number of CPU intervals required to complete all tasks.
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const map = new Map();
  let maxValue = 0;
  let maxCount = 0;

  tasks.forEach(key => {
    const value = map.has(key) ? map.get(key) + 1 : 1;
    map.set(key, value);

    if (value > maxValue) {
      maxValue = value;
      maxCount = 1;
    } else if (value === maxValue) {
      maxCount++;
    }
  });

  return Math.max(tasks.length, (maxValue - 1) * (n + 1) + maxCount);
};
