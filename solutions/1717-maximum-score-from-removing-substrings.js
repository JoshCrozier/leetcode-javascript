/**
 * 1717. Maximum Score From Removing Substrings
 * https://leetcode.com/problems/maximum-score-from-removing-substrings/
 * Difficulty: Medium
 *
 * You are given a string s and two integers x and y. You can perform two types of operations
 * any number of times.
 *
 * - Remove substring "ab" and gain x points.
 *   - For example, when removing "ab" from "cabxbae" it becomes "cxbae".
 * - Remove substring "ba" and gain y points.
 *   - For example, when removing "ba" from "cabxbae" it becomes "cabxe".
 *
 * Return the maximum points you can gain after applying the above operations on s.
 */

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  let result = 0;
  const stack = [];

  const [primary, secondary, primaryScore, secondaryScore] = x >= y
    ? ['ab', 'ba', x, y]
    : ['ba', 'ab', y, x];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === primary[0] && char === primary[1]) {
      stack.pop();
      result += primaryScore;
    } else {
      stack.push(char);
    }
  }

  const remaining = [];
  for (const char of stack) {
    if (remaining.length && remaining[remaining.length - 1] === secondary[0]
        && char === secondary[1]) {
      remaining.pop();
      result += secondaryScore;
    } else {
      remaining.push(char);
    }
  }

  return result;
};
