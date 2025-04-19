/**
 * 1558. Minimum Numbers of Function Calls to Make Target Array
 * https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/
 * Difficulty: Medium
 *
 * You are given an integer array nums. You have an integer array arr of the same length with all
 * values set to 0 initially. You also have the following modify function.
 *
 * You want to use the modify function to convert arr to nums using the minimum number of calls.
 *
 * Return the minimum number of function calls to make nums from arr.
 *
 * The test cases are generated so that the answer fits in a 32-bit signed integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let totalOperations = 0;
  let maxDivisions = 0;

  for (let num of nums) {
    let currentDivisions = 0;
    let increments = 0;

    while (num > 0) {
      if (num % 2 === 1) {
        increments++;
        num--;
      } else {
        currentDivisions++;
        num /= 2;
      }
    }

    totalOperations += increments;
    maxDivisions = Math.max(maxDivisions, currentDivisions);
  }

  return totalOperations + maxDivisions;
};
