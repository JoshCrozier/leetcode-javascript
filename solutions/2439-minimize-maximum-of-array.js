/**
 * 2439. Minimize Maximum of Array
 * https://leetcode.com/problems/minimize-maximum-of-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums comprising of n non-negative integers.
 *
 * In one operation, you must:
 * - Choose an integer i such that 1 <= i < n and nums[i] > 0.
 * - Decrease nums[i] by 1.
 * - Increase nums[i - 1] by 1.
 *
 * Return the minimum possible value of the maximum integer of nums after performing
 * any number of operations.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let left = 0;
  let right = Math.max(...nums);
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let carry = 0;
    let valid = true;

    for (let i = nums.length - 1; i >= 0; i--) {
      const total = nums[i] + carry;
      if (total > mid) {
        if (i === 0) {
          valid = false;
          break;
        }
        carry = total - mid;
      } else {
        carry = 0;
      }
    }

    if (valid) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
