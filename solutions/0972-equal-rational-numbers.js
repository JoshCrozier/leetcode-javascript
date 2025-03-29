/**
 * 972. Equal Rational Numbers
 * https://leetcode.com/problems/equal-rational-numbers/
 * Difficulty: Hard
 *
 * Given two strings s and t, each of which represents a non-negative rational number, return true
 * if and only if they represent the same number. The strings may use parentheses to denote the
 * repeating part of the rational number.
 *
 * A rational number can be represented using up to three parts: <IntegerPart>, <NonRepeatingPart>,
 * and a <RepeatingPart>. The number will be represented in one of the following three ways:
 * - <IntegerPart>
 *   - For example, 12, 0, and 123.
 * - <IntegerPart><.><NonRepeatingPart>
 *   - For example, 0.5, 1., 2.12, and 123.0001.
 * - <IntegerPart><.><NonRepeatingPart><(><RepeatingPart><)>
 *   - For example, 0.1(6), 1.(9), 123.00(1212).
 *
 * The repeating portion of a decimal expansion is conventionally denoted within a pair of round
 * brackets. For example:
 * - 1/6 = 0.16666666... = 0.1(6) = 0.1666(6) = 0.166(66).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isRationalEqual = function(s, t) {
  const valueS = parseRational(s);
  const valueT = parseRational(t);
  return Math.abs(valueS - valueT) < 1e-10;

  function parseRational(str) {
    const [integer, decimal] = str.split('.');
    if (!decimal) return parseInt(integer, 10);

    const openParen = decimal.indexOf('(');
    if (openParen === -1) return parseInt(integer, 10) + parseFloat(`0.${decimal}`);

    const nonRepeating = decimal.slice(0, openParen);
    const repeating = decimal.slice(openParen + 1, -1);
    const nonRepeatValue = nonRepeating ? parseFloat(`0.${nonRepeating}`) : 0;
    const repeatValue = parseInt(repeating, 10) / (10 ** repeating.length - 1)
      / (10 ** nonRepeating.length);

    return parseInt(integer, 10) + nonRepeatValue + repeatValue;
  }
};
