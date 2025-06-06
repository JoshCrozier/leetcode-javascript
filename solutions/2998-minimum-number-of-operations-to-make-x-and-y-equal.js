/**
 * 2998. Minimum Number of Operations to Make X and Y Equal
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/
 * Difficulty: Medium
 *
 * You are given two positive integers x and y.
 *
 * In one operation, you can do one of the four following operations:
 * 1. Divide x by 11 if x is a multiple of 11.
 * 2. Divide x by 5 if x is a multiple of 5.
 * 3. Decrement x by 1.
 * 4. Increment x by 1.
 *
 * Return the minimum number of operations required to make x and y equal.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minimumOperationsToMakeEqual = function(x, y) {
  const queue = [[x, 0]];
  const visited = new Set([x]);

  while (queue.length) {
    const [current, steps] = queue.shift();

    if (current === y) return steps;

    const nextStates = [];
    if (current % 11 === 0) nextStates.push(current / 11);
    if (current % 5 === 0) nextStates.push(current / 5);
    nextStates.push(current - 1, current + 1);

    for (const next of nextStates) {
      if (next >= 0 && next <= 10000 && !visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
};
