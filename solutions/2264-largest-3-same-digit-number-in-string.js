/**
 * 2264. Largest 3-Same-Digit Number in String
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string/
 * Difficulty: Easy
 *
 * You are given a string num representing a large integer. An integer is good if it meets
 * the following conditions:
 * - It is a substring of num with length 3.
 * - It consists of only one unique digit.
 *
 * Return the maximum good integer as a string or an empty string "" if no such integer exists.
 *
 * Note:
 * - A substring is a contiguous sequence of characters within a string.
 * - There may be leading zeroes in num or a good integer.
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let result = '';

  for (let i = 0; i <= num.length - 3; i++) {
    const substring = num.slice(i, i + 3);
    if (substring[0] === substring[1] && substring[1] === substring[2]) {
      if (substring > result) {
        result = substring;
      }
    }
  }

  return result;
};
