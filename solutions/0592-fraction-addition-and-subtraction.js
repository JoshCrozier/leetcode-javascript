/**
 * 592. Fraction Addition and Subtraction
 * https://leetcode.com/problems/fraction-addition-and-subtraction/
 * Difficulty: Medium
 *
 * Given a string expression representing an expression of fraction addition and subtraction,
 * return the calculation result in string format.
 *
 * The final result should be an irreducible fraction. If your final result is an integer,
 * change it to the format of a fraction that has a denominator 1. So in this case, 2 should
 * be converted to 2/1.
 */

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const gcdCalc = (a, b) => b === 0 ? a : gcdCalc(b, a % b);
  const fractions = expression.match(/[+-]?\d+\/\d+/g);
  let n = 0;
  let d = 1;

  for (const fraction of fractions) {
    const [numerator, denominator] = fraction.split('/').map(Number);
    n = n * denominator + numerator * d;
    d = d * denominator;
    const gcd = Math.abs(gcdCalc(n, d));
    n /= gcd;
    d /= gcd;
  }

  return `${n}/${d}`;
};
