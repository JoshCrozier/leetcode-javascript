/**
 * 1541. Minimum Insertions to Balance a Parentheses String
 * https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 * Difficulty: Medium
 *
 * Given a parentheses string s containing only the characters '(' and ')'. A parentheses string
 * is balanced if:
 * - Any left parenthesis '(' must have a corresponding two consecutive right parenthesis '))'.
 * - Left parenthesis '(' must go before the corresponding two consecutive right parenthesis '))'.
 *
 * In other words, we treat '(' as an opening parenthesis and '))' as a closing parenthesis.
 * - For example, "())", "())(())))" and "(())())))" are balanced, ")()", "()))" and "(()))" are
 *   not balanced.
 *
 * You can insert the characters '(' and ')' at any position of the string to balance it if needed.
 *
 * Return the minimum number of insertions needed to make s balanced.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let result = 0;
  let openCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openCount++;
    } else {
      if (i + 1 < s.length && s[i + 1] === ')') {
        i++;
      } else {
        result++;
      }
      if (openCount > 0) {
        openCount--;
      } else {
        result++;
      }
    }
  }

  result += openCount * 2;

  return result;
};
