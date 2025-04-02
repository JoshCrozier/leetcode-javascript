/**
 * 1073. Adding Two Negabinary Numbers
 * https://leetcode.com/problems/adding-two-negabinary-numbers/
 * Difficulty: Medium
 *
 * Given two numbers arr1 and arr2 in base -2, return the result of adding them together.
 *
 * Each number is given in array format:  as an array of 0s and 1s, from most significant
 * bit to least significant bit.  For example, arr = [1,1,0,1] represents the number
 * (-2)^3 + (-2)^2 + (-2)^0 = -3.  A number arr in array, format is also guaranteed to
 * have no leading zeros: either arr == [0] or arr[0] == 1.
 *
 * Return the result of adding arr1 and arr2 in the same format: as an array of 0s and 1s
 * with no leading zeros.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
  const result = [];
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry !== 0) {
    const x = i >= 0 ? arr1[i--] : 0;
    const y = j >= 0 ? arr2[j--] : 0;
    const sum = x + y + carry;

    result.unshift(sum & 1);
    carry = sum >= 2 ? -1 : sum < 0 ? 1 : 0;
  }

  while (result.length > 1 && result[0] === 0) {
    result.shift();
  }

  return result;
};
