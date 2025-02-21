/**
 * 241. Different Ways to Add Parentheses
 * https://leetcode.com/problems/different-ways-to-add-parentheses/
 * Difficulty: Medium
 *
 * Given a string expression of numbers and operators, return all possible results from
 * computing all the different possible ways to group numbers and operators. You may
 * return the answer in any order.
 *
 * The test cases are generated such that the output values fit in a 32-bit integer and
 * the number of different results does not exceed 104.
 */

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  const results = [];

  for (let i = 0; i < expression.length; i++) {
    if ('+-*'.includes(expression[i])) {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(expression.slice(i + 1));
      left.forEach(l => right.forEach(r =>
        results.push(expression[i] === '+' ? l + r : expression[i] === '-' ? l - r : l * r)));
    }
  }

  return results.length ? results : [+expression];
};
