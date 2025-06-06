/**
 * 2376. Count Special Integers
 * https://leetcode.com/problems/count-special-integers/
 * Difficulty: Hard
 *
 * We call a positive integer special if all of its digits are distinct.
 *
 * Given a positive integer n, return the number of special integers that belong to the
 * interval [1, n].
 */

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function(n) {
  const digits = String(n).split('').map(Number);
  const len = digits.length;
  let total = 0;

  for (let i = 1; i < len; i++) {
    let count = 9;
    for (let j = 0; j < i - 1; j++) {
      count *= (10 - j - 1);
    }
    total += count;
  }

  const used = new Set();
  for (let i = 0; i < len; i++) {
    for (let d = (i === 0 ? 1 : 0); d < digits[i]; d++) {
      if (!used.has(d)) {
        let count = 1;
        for (let j = i + 1; j < len; j++) {
          count *= (10 - used.size - (j - i));
        }
        total += count;
      }
    }
    if (used.has(digits[i]) || digits[i] === 0 && i === 0) break;
    used.add(digits[i]);
  }

  if (used.size === len) total++;

  return total;
};
