/**
 * 869. Reordered Power of 2
 * https://leetcode.com/problems/reordered-power-of-2/
 * Difficulty: Medium
 *
 * You are given an integer n. We reorder the digits in any order (including the original order)
 * such that the leading digit is not zero.
 *
 * Return true if and only if we can do this so that the resulting number is a power of two.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const numSignature = getDigitCount(n);
  const maxPower = Math.floor(Math.log2(10 ** 9));

  for (let i = 0; i <= maxPower; i++) {
    if (getDigitCount(1 << i) === numSignature) return true;
  }

  return false;

  function getDigitCount(num) {
    const count = Array(10).fill(0);
    while (num > 0) {
      count[num % 10]++;
      num = Math.floor(num / 10);
    }
    return count.join('');
  }
};
