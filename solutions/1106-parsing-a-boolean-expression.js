/**
 * 1106. Parsing A Boolean Expression
 * https://leetcode.com/problems/parsing-a-boolean-expression/
 * Difficulty: Hard
 *
 * A boolean expression is an expression that evaluates to either true or false. It can be in
 * one of the following shapes:
 * - 't' that evaluates to true.
 * - 'f' that evaluates to false.
 * - '!(subExpr)' that evaluates to the logical NOT of the inner expression subExpr.
 * - '&(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical AND of the inner
 *   expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
 * - '|(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical OR of the inner
 *   expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
 *
 * Given a string expression that represents a boolean expression, return the evaluation of
 * that expression.
 *
 * It is guaranteed that the given expression is valid and follows the given rules.
 */

/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  const stack = [];

  for (const char of expression) {
    if (char === ')') {
      const operands = [];
      while (stack[stack.length - 1] !== '(') {
        operands.push(stack.pop());
      }
      stack.pop();
      const operator = stack.pop();

      if (operator === '!') {
        stack.push(!operands[0]);
      } else if (operator === '&') {
        stack.push(operands.every(val => val));
      } else if (operator === '|') {
        stack.push(operands.some(val => val));
      }
    } else if (char !== ',') {
      stack.push(char === 't' ? true : char === 'f' ? false : char);
    }
  }

  return stack[0];
};
