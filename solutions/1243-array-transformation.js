/**
 * 1243. Array Transformation
 * https://leetcode.com/problems/array-transformation/
 * Difficulty: Easy
 *
 * Given an initial array arr, every day you produce a new array using the array of the
 * previous day.
 *
 * On the i-th day, you do the following operations on the array of day i-1 to produce
 * the array of day i:
 * - If an element is smaller than both its left neighbor and its right neighbor, then this
 *   element is incremented.
 * - If an element is bigger than both its left neighbor and its right neighbor, then this
 *   element is decremented.
 *
 * The first and last elements never change.
 *
 * After some days, the array does not change. Return that final array.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function(arr) {
  let current = [...arr];

  while (true) {
    const next = [...current];
    let changed = false;

    for (let i = 1; i < current.length - 1; i++) {
      if (current[i] < current[i - 1] && current[i] < current[i + 1]) {
        next[i]++;
        changed = true;
      } else if (current[i] > current[i - 1] && current[i] > current[i + 1]) {
        next[i]--;
        changed = true;
      }
    }

    if (!changed) break;
    current = next;
  }

  return current;
};
