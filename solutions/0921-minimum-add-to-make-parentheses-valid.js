/**
 * 921. Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * Difficulty: Medium
 *
 * A parentheses string is valid if and only if:
 * - It is the empty string,
 * - It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * - It can be written as (A), where A is a valid string.
 *
 * You are given a parentheses string s. In one move, you can insert a parenthesis at any position
 * of the string.
 * - For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing
 *   parenthesis to be "())))".
 *
 * Return the minimum number of moves required to make s valid.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let openCount = 0;
  let unmatchedClose = 0;

  for (const character of s) {
    if (character === '(') {
      openCount++;
    } else if (openCount > 0) {
      openCount--;
    } else {
      unmatchedClose++;
    }
  }

  return openCount + unmatchedClose;
};
