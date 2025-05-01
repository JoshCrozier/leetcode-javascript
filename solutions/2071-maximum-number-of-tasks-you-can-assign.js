/**
 * 2071. Maximum Number of Tasks You Can Assign
 * https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/
 * Difficulty: Hard
 *
 * You have n tasks and m workers. Each task has a strength requirement stored in a 0-indexed
 * integer array tasks, with the ith task requiring tasks[i] strength to complete. The strength
 * of each worker is stored in a 0-indexed integer array workers, with the jth worker having
 * workers[j] strength. Each worker can only be assigned to a single task and must have a
 * strength greater than or equal to the task's strength requirement (i.e., workers[j] >= tasks[i]).
 *
 * Additionally, you have pills magical pills that will increase a worker's strength by strength.
 * You can decide which workers receive the magical pills, however, you may only give each worker
 * at most one magical pill.
 *
 * Given the 0-indexed integer arrays tasks and workers and the integers pills and strength,
 * return the maximum number of tasks that can be completed.
 */

/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function(tasks, workers, pills, strength) {
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  const n = tasks.length;
  const m = workers.length;

  let left = 0;
  let right = Math.min(n, m);

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);

    if (canAssign(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;

  function canAssign(k) {
    const availableTasks = tasks.slice(0, k);
    const availableWorkers = workers.slice(m - k);
    let remainingPills = pills;

    for (let i = k - 1; i >= 0; i--) {
      const task = availableTasks[i];

      if (availableWorkers[availableWorkers.length - 1] >= task) {
        availableWorkers.pop();
        continue;
      }

      if (remainingPills === 0) return false;

      let found = false;
      for (let j = 0; j < availableWorkers.length; j++) {
        if (availableWorkers[j] + strength >= task) {
          availableWorkers.splice(j, 1);
          remainingPills--;
          found = true;
          break;
        }
      }

      if (!found) return false;
    }

    return true;
  }
};
