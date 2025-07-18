/**
 * 3237. Alt and Tab Simulation
 * https://leetcode.com/problems/alt-and-tab-simulation/
 * Difficulty: Medium
 *
 * There are n windows open numbered from 1 to n, we want to simulate using alt + tab to
 * navigate between the windows.
 *
 * You are given an array windows which contains the initial order of the windows (the
 * first element is at the top and the last one is at the bottom).
 *
 * You are also given an array queries where for each query, the window queries[i] is
 * brought to the top.
 *
 * Return the final state of the array windows.
 */

/**
 * @param {number[]} windows
 * @param {number[]} queries
 * @return {number[]}
 */
var simulationResult = function(windows, queries) {
  const result = [];
  const set = new Set();

  for (let i = queries.length - 1; i >= 0; i--) {
    const window = queries[i];

    if (!set.has(window)) {
      result.push(window);
      set.add(window);
    }
  }

  for (const window of windows) {
    if (!set.has(window)) {
      result.push(window);
    }
  }

  return result;
};
