/**
 * 1614. Maximum Nesting Depth of the Parentheses
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * Difficulty: Easy
 *
 * Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the
 * maximum number of nested parentheses.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let currentDepth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === '(') {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char === ')') {
      currentDepth--;
    }
  }

  return maxDepth;
};
