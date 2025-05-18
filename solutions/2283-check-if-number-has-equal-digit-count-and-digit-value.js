/**
 * 2283. Check if Number Has Equal Digit Count and Digit Value
 * https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
 * Difficulty: Easy
 *
 * You are given a 0-indexed string num of length n consisting of digits.
 *
 * Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num,
 * otherwise return false.
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  const frequency = new Array(10).fill(0);

  for (const digit of num) {
    frequency[digit]++;
  }

  for (let i = 0; i < num.length; i++) {
    if (frequency[i] !== Number(num[i])) {
      return false;
    }
  }

  return true;
};
