/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 * Difficulty: Medium
 *
 * Given n pairs of parentheses, write a function to generate all combinations of
 * well-formed parentheses.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  backtrack(result, '', 0, 0, n);
  return result;
};

function backtrack(result, str, open, close, max) {
  if (str.length === max * 2) {
    result.push(str);
    return;
  }

  if (open < max) backtrack(result, `${str}(`, open + 1, close, max);
  if (close < open) backtrack(result, `${str})`, open, close + 1, max);
}
