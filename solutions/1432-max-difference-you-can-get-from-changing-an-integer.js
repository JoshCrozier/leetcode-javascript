/**
 * 1432. Max Difference You Can Get From Changing an Integer
 * https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/
 * Difficulty: Medium
 *
 * You are given an integer num. You will apply the following steps exactly two times:
 * - Pick a digit x (0 <= x <= 9).
 * - Pick another digit y (0 <= y <= 9). The digit y can be equal to x.
 * - Replace all the occurrences of x in the decimal representation of num by y.
 * - The new integer cannot have any leading zeros, also the new integer cannot be 0.
 *
 * Let a and b be the results of applying the operations to num the first and second times,
 * respectively.
 *
 * Return the max difference between a and b.
 */

/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
  const digits = num.toString().split('');

  const maxNum = digits.slice();
  for (let i = 0; i < maxNum.length; i++) {
    if (maxNum[i] !== '9') {
      const target = maxNum[i];
      for (let j = i; j < maxNum.length; j++) {
        if (maxNum[j] === target) {
          maxNum[j] = '9';
        }
      }
      break;
    }
  }

  const minNum = digits.slice();
  if (minNum[0] !== '1') {
    const target = minNum[0];
    for (let j = 0; j < minNum.length; j++) {
      if (minNum[j] === target) {
        minNum[j] = '1';
      }
    }
  } else {
    for (let i = 1; i < minNum.length; i++) {
      if (minNum[i] !== '0' && minNum[i] !== '1') {
        const target = minNum[i];
        for (let j = i; j < minNum.length; j++) {
          if (minNum[j] === target) {
            minNum[j] = '0';
          }
        }
        break;
      }
    }
  }

  return parseInt(maxNum.join('')) - parseInt(minNum.join(''));
};
