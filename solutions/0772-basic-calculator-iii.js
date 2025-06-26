/**
 * 772. Basic Calculator III
 * https://leetcode.com/problems/basic-calculator-iii/
 * Difficulty: Hard
 *
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and
 * open '(' and closing parentheses ')'. The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate results will be
 * in the range of [-231, 231 - 1].
 *
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical
 * expressions, such as eval().
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let index = 0;
  return parseExpression();

  function parseExpression() {
    let result = parseTerm();

    while (index < s.length && (s[index] === '+' || s[index] === '-')) {
      const operator = s[index++];
      const term = parseTerm();
      result = operator === '+' ? result + term : result - term;
    }

    return result;
  }

  function parseTerm() {
    let result = parseFactor();

    while (index < s.length && (s[index] === '*' || s[index] === '/')) {
      const operator = s[index++];
      const factor = parseFactor();
      if (operator === '*') {
        result *= factor;
      } else {
        result = Math.trunc(result / factor);
      }
    }

    return result;
  }

  function parseFactor() {
    skipSpaces();

    if (s[index] === '(') {
      index++;
      const result = parseExpression();
      index++;
      return result;
    }

    let result = 0;
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
      result = result * 10 + parseInt(s[index++]);
    }

    return result;
  }

  function skipSpaces() {
    while (index < s.length && s[index] === ' ') {
      index++;
    }
  }
};
