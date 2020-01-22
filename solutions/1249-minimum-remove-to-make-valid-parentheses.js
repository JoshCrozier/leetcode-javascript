/**
 * 1249. Minimum Remove to Make Valid Parentheses
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 * Difficulty: Medium
 *
 * Given a string s of '(' , ')' and lowercase English characters.
 *
 * Your task is to remove the minimum number of parentheses ( '(' or ')',
 * in any positions ) so that the resulting parentheses string is valid
 * and return any valid string.
 *
 * Formally, a parentheses string is valid if and only if:
 * - It is the empty string, contains only lowercase characters, or
 * - It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * - It can be written as (A), where A is a valid string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  const inputArray = s.split('');
  const stack = [];

  inputArray.forEach((letter, index) => {
    if (letter === '(') {
      stack.push(index);
    } else if (letter === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        inputArray[index] = '';
      }
    }
  });

  stack.forEach(index => inputArray[index] = '');
  return inputArray.join('');
};
