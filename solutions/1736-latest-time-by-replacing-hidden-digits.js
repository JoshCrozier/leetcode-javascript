/**
 * 1736. Latest Time by Replacing Hidden Digits
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
 * Difficulty: Easy
 *
 * You are given a string time in the form of  hh:mm, where some of the digits in the string
 * are hidden (represented by ?).
 *
 * The valid times are those inclusively between 00:00 and 23:59.
 *
 * Return the latest valid time you can get from time by replacing the hidden digits.
 */

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  const result = time.split('');

  if (result[0] === '?') {
    result[0] = result[1] === '?' || result[1] <= '3' ? '2' : '1';
  }

  if (result[1] === '?') {
    result[1] = result[0] === '2' ? '3' : '9';
  }

  if (result[3] === '?') {
    result[3] = '5';
  }

  if (result[4] === '?') {
    result[4] = '9';
  }

  return result.join('');
};
