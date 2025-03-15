/**
 * 795. Number of Subarrays with Bounded Maximum
 * https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
 * Difficulty: Medium
 *
 * Given an integer array nums and two integers left and right, return the number of contiguous
 * non-empty subarrays such that the value of the maximum array element in that subarray is in
 * the range [left, right].
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
  let result = 0;
  let validCount = 0;
  let prevInvalidGreater = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      validCount = 0;
      prevInvalidGreater = i;
    } else if (nums[i] >= left) {
      validCount = i - prevInvalidGreater;
    }

    result += validCount;
  }

  return result;
};
