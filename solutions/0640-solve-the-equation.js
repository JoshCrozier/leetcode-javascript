/**
 * 640. Solve the Equation
 * https://leetcode.com/problems/solve-the-equation/
 * Difficulty: Medium
 *
 * Solve a given equation and return the value of 'x' in the form of a string "x=#value".
 * The equation contains only '+', '-' operation, the variable 'x' and its coefficient.
 * You should return "No solution" if there is no solution for the equation, or "Infinite
 * solutions" if there are infinite solutions for the equation.
 *
 * If there is exactly one solution for the equation, we ensure that the value of 'x' is
 * an integer.
 */

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  const [left, right] = equation.split('=');
  const leftSide = parseSide(left);
  const rightSide = parseSide(right);
  const totalX = leftSide.xCount - rightSide.xCount;
  const totalNum = rightSide.numSum - leftSide.numSum;

  if (totalX === 0 && totalNum === 0) return 'Infinite solutions';
  if (totalX === 0) return 'No solution';

  return `x=${totalNum / totalX}`;

  function parseSide(side) {
    let xCount = 0;
    let numSum = 0;
    let currentNum = 0;
    let sign = 1;

    for (let i = 0; i < side.length; i++) {
      const char = side[i];
      if (char === 'x') {
        const v = i === 0 || side[i-1] === '+' || side[i-1] === '-';
        xCount += sign * (currentNum === 0 && (v) ? 1 : currentNum);
        currentNum = 0;
      } else if (char === '+' || char === '-') {
        numSum += sign * currentNum;
        sign = char === '+' ? 1 : -1;
        currentNum = 0;
      } else {
        currentNum = currentNum * 10 + parseInt(char);
      }
    }
    numSum += sign * currentNum;

    return { xCount, numSum };
  }
};
