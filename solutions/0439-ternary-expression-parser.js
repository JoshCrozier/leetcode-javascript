/**
 * 439. Ternary Expression Parser
 * https://leetcode.com/problems/ternary-expression-parser/
 * Difficulty: Medium
 *
 * Given a string expression representing arbitrarily nested ternary expressions,
 * evaluate the expression, and return the result of it.
 *
 * You can always assume that the given expression is valid and only contains digits,
 * '?', ':', 'T', and 'F' where 'T' is true and 'F' is false. All the numbers in the
 * expression are one-digit numbers (i.e., in the range [0, 9]).
 *
 * The conditional expressions group right-to-left (as usual in most languages), and
 * the result of the expression will always evaluate to either a digit, 'T' or 'F'.
 */

/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function(expression) {
  const stack = [];

  for (let i = expression.length - 1; i >= 0; i--) {
    const char = expression[i];
    if (char !== ':' && char !== '?') {
      stack.push(char);
    } else if (char === '?') {
      const condition = expression[i - 1];
      const trueValue = stack.pop();
      const falseValue = stack.pop();
      stack.push(condition === 'T' ? trueValue : falseValue);
      i--;
    }
  }

  return stack[0];
};
