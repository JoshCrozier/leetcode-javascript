/**
 * 1588. Sum of All Odd Length Subarrays
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * Difficulty: Easy
 *
 * Given an array of positive integers arr, return the sum of all possible odd-length
 * subarrays of arr.
 *
 * A subarray is a contiguous subsequence of the array.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let result = 0;

  for (let index = 0; index < arr.length; index++) {
    result += arr[index] * Math.ceil(((index + 1) * (arr.length - index)) / 2);
  }

  return result;
};
