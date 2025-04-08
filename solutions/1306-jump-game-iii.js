/**
 * 1306. Jump Game III
 * https://leetcode.com/problems/jump-game-iii/
 * Difficulty: Medium
 *
 * Given an array of non-negative integers arr, you are initially positioned at start index of
 * the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you
 * can reach any index with value 0.
 *
 * Notice that you can not jump outside of the array at any time.
 */

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const current = queue.shift();

    if (arr[current] === 0) return true;
    if (visited.has(current)) continue;

    visited.add(current);

    const jump = arr[current];
    const nextRight = current + jump;
    const nextLeft = current - jump;

    if (nextRight < arr.length) queue.push(nextRight);
    if (nextLeft >= 0) queue.push(nextLeft);
  }

  return false;
};
