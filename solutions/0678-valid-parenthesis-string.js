/**
 * 678. Valid Parenthesis String
 * https://leetcode.com/problems/valid-parenthesis-string/
 * Difficulty: Medium
 *
 * Given a string s containing only three types of characters: '(', ')' and '*', return
 * true if s is valid.
 *
 * The following rules define a valid string:
 * - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * - Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * - '*' could be treated as a single right parenthesis ')' or a single left parenthesis
 *   '(' or an empty string "".
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let result = 0;
  let offset = 0;

  for (const character of s) {
    result += character === '(' ? 1 : -1;
    offset += character !== ')' ? 1 : -1;
    if (offset < 0) return false;
    result = Math.max(0, result);
  }

  return !result;
};
