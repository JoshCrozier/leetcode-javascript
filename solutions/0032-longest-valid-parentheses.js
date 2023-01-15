/**
 * 32. Longest Valid Parentheses
 * https://leetcode.com/problems/longest-valid-parentheses/
 * Difficulty: Hard
 *
 * Given a string containing just the characters '(' and ')', return the
 * length of the longest valid (well-formed) parentheses substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (!s.length) {
    return 0;
  }

  const stack = [-1];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }

  return max;
};
