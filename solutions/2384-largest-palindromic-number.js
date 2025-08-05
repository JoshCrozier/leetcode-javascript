/**
 * 2384. Largest Palindromic Number
 * https://leetcode.com/problems/largest-palindromic-number/
 * Difficulty: Medium
 *
 * You are given a string num consisting of digits only.
 *
 * Return the largest palindromic integer (in the form of a string) that can be formed
 * using digits taken from num. It should not contain leading zeroes.
 *
 * Notes:
 * - You do not need to use all the digits of num, but you must use at least one digit.
 * - The digits can be reordered.
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
  const digitCount = new Array(10).fill(0);

  for (const digit of num) {
    digitCount[parseInt(digit, 10)]++;
  }

  let leftHalf = '';
  let middle = '';
  for (let digit = 9; digit >= 0; digit--) {
    const count = digitCount[digit];
    const pairs = Math.floor(count / 2);

    if (digit === 0 && leftHalf === '') {
      continue;
    }

    leftHalf += digit.toString().repeat(pairs);

    if (count % 2 === 1 && middle === '') {
      middle = digit.toString();
    }
  }

  if (leftHalf === '' && middle === '') {
    return '0';
  }

  const rightHalf = leftHalf.split('').reverse().join('');
  return leftHalf + middle + rightHalf;
};
