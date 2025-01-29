/**
 * 166. Fraction to Recurring Decimal
 * https://leetcode.com/problems/fraction-to-recurring-decimal/
 * Difficulty: Medium
 *
 * Given two integers representing the numerator and denominator of a fraction, return
 * the fraction in string format.
 *
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 *
 * If multiple answers are possible, return any of them.
 *
 * It is guaranteed that the length of the answer string is less than 104 for all the
 * given inputs.
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return '0';

  const map = new Map();
  let result = '';

  if (Math.sign(numerator) !== Math.sign(denominator)) {
    result += '-';
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  result += Math.floor(numerator / denominator);

  let remainder = numerator % denominator;
  while (remainder) {
    result = result.indexOf('.') === -1 ? `${result}.` : result;
    if (map.has(remainder)) {
      const index = map.get(remainder);
      result = `${result.slice(0, index)}(${result.slice(index)})`;
      break;
    }
    map.set(remainder, result.length);
    remainder *= 10;
    result += Math.floor(remainder / denominator);
    remainder %= denominator;
  }

  return result;
};
