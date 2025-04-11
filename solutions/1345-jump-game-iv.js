/**
 * 1345. Jump Game IV
 * https://leetcode.com/problems/jump-game-iv/
 * Difficulty: Hard
 *
 * Given an array of integers arr, you are initially positioned at the first index of the array.
 *
 * In one step you can jump from index i to index:
 * - i + 1 where: i + 1 < arr.length.
 * - i - 1 where: i - 1 >= 0.
 * - j where: arr[i] == arr[j] and i != j.
 *
 * Return the minimum number of steps to reach the last index of the array.
 *
 * Notice that you can not jump outside of the array at any time.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  const n = arr.length;
  if (n <= 1) return 0;

  const valueToIndices = new Map();
  for (let i = 0; i < n; i++) {
    if (!valueToIndices.has(arr[i])) {
      valueToIndices.set(arr[i], []);
    }
    valueToIndices.get(arr[i]).push(i);
  }

  const visited = new Set([0]);
  let queue = [0];
  let result = 0;

  while (queue.length) {
    const nextQueue = [];

    for (const current of queue) {
      if (current === n - 1) return result;

      if (current + 1 < n && !visited.has(current + 1)) {
        visited.add(current + 1);
        nextQueue.push(current + 1);
      }

      if (current - 1 >= 0 && !visited.has(current - 1)) {
        visited.add(current - 1);
        nextQueue.push(current - 1);
      }

      for (const next of valueToIndices.get(arr[current]) || []) {
        if (!visited.has(next)) {
          visited.add(next);
          nextQueue.push(next);
        }
      }

      valueToIndices.delete(arr[current]);
    }

    queue = nextQueue;
    result++;
  }

  return result;
};
