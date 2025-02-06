/**
 * 282. Expression Add Operators
 * https://leetcode.com/problems/expression-add-operators/
 * Difficulty: Hard
 *
 * Given a string num that contains only digits and an integer target, return all possibilities
 * to insert the binary operators '+', '-', and/or '*' between the digits of num so that the
 * resultant expression evaluates to the target value.
 *
 * Note that operands in the returned expressions should not contain leading zeros.
 */

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const result = [];
  backtrack('', 0, 0, 0);
  return result;

  function backtrack(expression, sum, prev, start) {
    if (start === num.length && sum === target) {
      result.push(expression);
      return;
    }
    for (let i = start, str = ''; i < num.length; i++) {
      str += num[i];
      const n = Number(str);
      if (!start) {
        backtrack(str, n, n, i + 1);
        if (str === '0') return;
        continue;
      }
      backtrack(expression + '*' + n, sum - prev + prev * n, prev * n, i + 1);
      backtrack(expression + '+' + n, sum + n, n, i + 1);
      backtrack(expression + '-' + n, sum - n, -n, i + 1);
      if (str === '0') return;
    }
  }
};
