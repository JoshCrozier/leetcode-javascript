/**
 * 2094. Finding 3-Digit Even Numbers
 * https://leetcode.com/problems/finding-3-digit-even-numbers/
 * Difficulty: Easy
 *
 * You are given an integer array digits, where each element is a digit. The array may contain
 * duplicates.
 *
 * You need to find all the unique integers that follow the given requirements:
 * - The integer consists of the concatenation of three elements from digits in any arbitrary order.
 * - The integer does not have leading zeros.
 * - The integer is even.
 *
 * For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
 *
 * Return a sorted array of the unique integers.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const frequency = new Array(10).fill(0);
  const uniqueNumbers = new Set();

  for (const digit of digits) {
    frequency[digit]++;
  }

  for (let hundreds = 1; hundreds <= 9; hundreds++) {
    if (frequency[hundreds] === 0) continue;
    frequency[hundreds]--;

    for (let tens = 0; tens <= 9; tens++) {
      if (frequency[tens] === 0) continue;
      frequency[tens]--;

      for (let ones = 0; ones <= 8; ones += 2) {
        if (frequency[ones] === 0) continue;
        uniqueNumbers.add(hundreds * 100 + tens * 10 + ones);
      }

      frequency[tens]++;
    }

    frequency[hundreds]++;
  }

  return Array.from(uniqueNumbers).sort((a, b) => a - b);
};
