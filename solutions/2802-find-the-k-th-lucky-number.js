/**
 * 2802. Find The K-th Lucky Number
 * https://leetcode.com/problems/find-the-k-th-lucky-number/
 * Difficulty: Medium
 *
 * We know that 4 and 7 are lucky digits. Also, a number is called lucky if it contains only
 * lucky digits.
 *
 * You are given an integer k, return the kth lucky number represented as a string.
 */

/**
 * @param {number} k
 * @return {string}
 */
var kthLuckyNumber = function(k) {
  let length = 1;
  let totalNumbers = 0;

  while (totalNumbers + Math.pow(2, length) < k) {
    totalNumbers += Math.pow(2, length);
    length++;
  }

  const position = k - totalNumbers;
  const binaryString = (position - 1).toString(2).padStart(length, '0');

  return binaryString.replace(/0/g, '4').replace(/1/g, '7');
};
