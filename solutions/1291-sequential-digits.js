/**
 * 1291. Sequential Digits
 * https://leetcode.com/problems/sequential-digits/
 * Difficulty: Medium
 *
 * An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
 * Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  return getSequentialNumbers().filter(n => n >= low && n <= high);
};

function getSequentialNumbers() {
  const numbers = new Set([]);

  for (let i = 0; i < 10; i++) {
    for (let j = 9; j > 0 && j > i + 1; j--) {
      numbers.add(+'123456789'.slice(i, j));
    }
  }

  return [...numbers].sort((a, b) => a - b);
}
