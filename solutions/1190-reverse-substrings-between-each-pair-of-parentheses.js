/**
 * 1190. Reverse Substrings Between Each Pair of Parentheses
 * https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
 * Difficulty: Medium
 *
 * You are given a string s that consists of lower case English letters and brackets.
 *
 * Reverse the strings in each pair of matching parentheses, starting from the innermost one.
 *
 * Your result should not contain any brackets.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [[]];

  for (const char of s) {
    if (char === '(') {
      stack.push([]);
    } else if (char === ')') {
      const reversed = stack.pop().reverse();
      stack[stack.length - 1].push(...reversed);
    } else {
      stack[stack.length - 1].push(char);
    }
  }

  return stack[0].join('');
};
