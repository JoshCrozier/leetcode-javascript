/**
 * 2796. Repeat String
 * https://leetcode.com/problems/repeat-string/
 * Difficulty: Easy
 *
 * Write code that enhances all strings such that you can call the string.replicate(x) method
 * on any string and it will return repeated string x times.
 *
 * Try to implement it without using the built-in method string.repeat.
 */

/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function(times) {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += this;
  }
  return result;
};
