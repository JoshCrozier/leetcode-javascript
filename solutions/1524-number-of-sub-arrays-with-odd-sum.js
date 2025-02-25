/**
 * 1524. Number of Sub-arrays With Odd Sum
 * https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
 * Difficulty: Medium
 *
 * Given an array of integers arr, return the number of subarrays with an odd sum.
 *
 * Since the answer can be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
  let even = 0;
  let odd = 0;

  for (let i = 0, total = 0; i < arr.length; i++) {
    total += arr[i];
    odd += +(total % 2 === 1);
    even += +(total % 2 === 0);
  }

  return (odd * even + odd) % (1e9 + 7);
};
