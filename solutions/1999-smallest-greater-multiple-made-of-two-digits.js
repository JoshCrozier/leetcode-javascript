/**
 * 1999. Smallest Greater Multiple Made of Two Digits
 * https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/
 * Difficulty: Medium
 *
 * Given three integers, k, digit1, and digit2, you want to find the smallest integer that is:
 * - Larger than k,
 * - A multiple of k, and
 * - Comprised of only the digits digit1 and/or digit2.
 *
 * Return the smallest such integer. If no such integer exists or the integer exceeds the limit
 * of a signed 32-bit integer (231 - 1), return -1.
 */

/**
 * @param {number} k
 * @param {number} digit1
 * @param {number} digit2
 * @return {number}
 */
var findInteger = function(k, digit1, digit2) {
  const minDigit = Math.min(digit1, digit2);
  const maxDigit = Math.max(digit1, digit2);
  const queue = minDigit !== maxDigit ? [minDigit, maxDigit] : [minDigit];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === 0 || current > 2147483647) {
      continue;
    }

    if (current > k && current % k === 0) {
      return current;
    }

    queue.push(current * 10 + minDigit);
    if (minDigit !== maxDigit) {
      queue.push(current * 10 + maxDigit);
    }
  }

  return -1;
};
