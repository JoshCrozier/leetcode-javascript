/**
 * 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 * Difficulty: Medium
 *
 * Given a list of daily temperatures T, return a list such that, for
 * each day in the input, tells you how many days you would have to
 * wait until a warmer temperature. If there is no future day for
 * which this is possible, put 0 instead.
 *
 * For example, given the list of temperatures
 * T = [73, 74, 75, 71, 69, 72, 76, 73], your output
 * should be [1, 1, 4, 2, 1, 1, 0, 0].
 *
 * Note: The length of temperatures will be in the range [1, 30000].
 * Each temperature will be an integer in the range [30, 100].
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const result = new Array(T.length).fill(0);
  const stack = [];

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const topIndex = stack.pop();
      result[topIndex] = i - topIndex;
    }
    stack.push(i);
  }

  return result;
};
