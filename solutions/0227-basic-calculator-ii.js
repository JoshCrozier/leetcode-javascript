/**
 * 227. Basic Calculator II
 * https://leetcode.com/problems/basic-calculator-ii/
 * Difficulty: Medium
 *
 * Given a string s which represents an expression, evaluate this expression and return its value.
 *
 * The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate results will be in
 * the range of [-231, 231 - 1].
 *
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical
 * expressions, such as eval().
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];

  for (let i = 0, num = 0, sign = '+'; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') num = num * 10 + (s[i] - '0');
    if ((s[i] < '0' && s[i] !== ' ') || i === s.length - 1) {
      if (sign === '+') stack.push(num);
      else if (sign === '-') stack.push(-num);
      else if (sign === '*') stack.push(stack.pop() * num);
      else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
      sign = s[i];
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};
