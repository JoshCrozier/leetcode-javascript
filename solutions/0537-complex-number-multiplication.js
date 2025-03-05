/**
 * 537. Complex Number Multiplication
 * https://leetcode.com/problems/complex-number-multiplication/
 * Difficulty: Medium
 *
 * A complex number can be represented as a string on the form "real+imaginaryi" where:
 * - real is the real part and is an integer in the range [-100, 100].
 * - imaginary is the imaginary part and is an integer in the range [-100, 100].
 * - i2 == -1.
 *
 * Given two complex numbers num1 and num2 as strings, return a string of the complex number
 * that represents their multiplications.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
  const [r1, i1] = num1.split('+').map(n => parseInt(n.replace('i', '')));
  const [r2, i2] = num2.split('+').map(n => parseInt(n.replace('i', '')));
  return `${r1 * r2 - i1 * i2}+${r1 * i2 + r2 * i1}i`;
};
