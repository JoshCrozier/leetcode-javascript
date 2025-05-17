/**
 * 2232. Minimize Result by Adding Parentheses to Expression
 * https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string expression of the form "<num1>+<num2>" where <num1>
 * and <num2> represent positive integers.
 *
 * Add a pair of parentheses to expression such that after the addition of parentheses,
 * expression is a valid mathematical expression and evaluates to the smallest possible
 * value. The left parenthesis must be added to the left of '+' and the right parenthesis
 * must be added to the right of '+'.
 *
 * Return expression after adding a pair of parentheses such that expression evaluates to the
 * smallest possible value. If there are multiple answers that yield the same result, return
 * any of them.
 *
 * The input has been generated such that the original value of expression, and the value of
 * expression after adding any pair of parentheses that meets the requirements fits within
 * a signed 32-bit integer.
 */

/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {
  const plusIndex = expression.indexOf('+');
  const left = expression.slice(0, plusIndex);
  const right = expression.slice(plusIndex + 1);
  let minValue = Infinity;
  let result = '';

  for (let i = 0; i < left.length; i++) {
    for (let j = 1; j <= right.length; j++) {
      const leftPrefix = i === 0 ? 1 : parseInt(left.slice(0, i));
      const leftNum = parseInt(left.slice(i), 10);
      const rightNum = parseInt(right.slice(0, j), 10);
      const rightSuffix = j === right.length ? 1 : parseInt(right.slice(j), 10);
      const value = leftPrefix * (leftNum + rightNum) * rightSuffix;

      if (value < minValue) {
        minValue = value;
        result = `${left.slice(0, i)}(${left.slice(i)}+${right.slice(0, j)})${right.slice(j)}`;
      }
    }
  }

  return result;
};
