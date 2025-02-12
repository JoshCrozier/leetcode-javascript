/**
 * 224. Basic Calculator
 * https://leetcode.com/problems/basic-calculator/
 * Difficulty: Hard
 *
 * Given a string s representing a valid expression, implement a basic calculator to
 * evaluate it, and return the result of the evaluation.
 *
 * Note: You are not allowed to use any built-in function which evaluates strings as
 * mathematical expressions, such as eval().
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let result = 0;

  for (let i = 0, sign = 1; i < s.length; i += 1) {
    if (s[i] >= '0' && s[i] <= '9') {
      let value = 0;
      while (s[i] >= '0' && s[i] <= '9') {
        value = (value * 10) + (s[i] - '0');
        i += 1;
      }
      result += value * sign;
      i -= 1;
    } else if (s[i] === '+') {
      sign = 1;
    } else if (s[i] === '-') {
      sign = -1;
    } else if (s[i] === '(') {
      stack.push(result, sign);
      result = 0;
      sign = 1;
    } else if (s[i] === ')') {
      result = stack.pop() * result;
      result += stack.pop();
    }
  }

  return result;
};
