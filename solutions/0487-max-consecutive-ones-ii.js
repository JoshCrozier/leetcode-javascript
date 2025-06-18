/**
 * 487. Max Consecutive Ones II
 * https://leetcode.com/problems/max-consecutive-ones-ii/
 * Difficulty: Medium
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in the array
 * if you can flip at most one 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let result = 0;
  let currentConsecutive = 0;
  let zeroCount = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      currentConsecutive--;
      left++;
    }

    currentConsecutive++;
    result = Math.max(result, currentConsecutive);
  }

  return result;
};
