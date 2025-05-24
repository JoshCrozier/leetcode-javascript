/**
 * 2496. Maximum Value of a String in an Array
 * https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
 * Difficulty: Easy
 *
 * The value of an alphanumeric string can be defined as:
 * - The numeric representation of the string in base 10, if it comprises of digits only.
 * - The length of the string, otherwise.
 *
 * Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let result = 0;

  for (const str of strs) {
    const isNumeric = /^[0-9]+$/.test(str);
    const value = isNumeric ? parseInt(str) : str.length;
    result = Math.max(result, value);
  }

  return result;
};
