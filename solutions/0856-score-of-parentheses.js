/**
 * 856. Score of Parentheses
 * https://leetcode.com/problems/score-of-parentheses/
 * Difficulty: Medium
 *
 * Given a balanced parentheses string s, return the score of the string.
 *
 * The score of a balanced parentheses string is based on the following rule:
 * - "()" has score 1.
 * - AB has score A + B, where A and B are balanced parentheses strings.
 * - (A) has score 2 * A, where A is a balanced parentheses string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  const stack = [0];

  for (const char of s) {
    if (char === '(') {
      stack.push(0);
    } else {
      const value = stack.pop();
      stack[stack.length - 1] += Math.max(2 * value, 1);
    }
  }

  return stack[0];
};
