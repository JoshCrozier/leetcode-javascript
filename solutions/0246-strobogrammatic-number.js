/**
 * 246. Strobogrammatic Number
 * https://leetcode.com/problems/strobogrammatic-number/
 * Difficulty: Easy
 *
 * Given a string num which represents an integer, return true if num is a strobogrammatic number.
 *
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at
 * upside down).
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  const validPairs = new Map([
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6']
  ]);
  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftDigit = num[left];
    const rightDigit = num[right];

    if (!validPairs.has(leftDigit) || validPairs.get(leftDigit) !== rightDigit) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
