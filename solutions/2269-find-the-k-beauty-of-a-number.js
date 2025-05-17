/**
 * 2269. Find the K-Beauty of a Number
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 * Difficulty: Easy
 *
 * The k-beauty of an integer num is defined as the number of substrings of num when it is
 * read as a string that meet the following conditions:
 * - It has a length of k.
 * - It is a divisor of num.
 *
 * Given integers num and k, return the k-beauty of num.
 *
 * Note:
 * - Leading zeros are allowed.
 * - 0 is not a divisor of any value.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  const numStr = num.toString();
  let result = 0;

  for (let i = 0; i <= numStr.length - k; i++) {
    const substring = parseInt(numStr.slice(i, i + k));
    if (substring !== 0 && num % substring === 0) {
      result++;
    }
  }

  return result;
};
