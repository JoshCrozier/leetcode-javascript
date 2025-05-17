/**
 * 2239. Find Closest Number to Zero
 * https://leetcode.com/problems/find-closest-number-to-zero/
 * Difficulty: Easy
 *
 * Given an integer array nums of size n, return the number with the value closest to 0 in nums.
 * If there are multiple answers, return the number with the largest value.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let result = nums[0];
  let minDistance = Math.abs(nums[0]);

  for (const num of nums) {
    const distance = Math.abs(num);
    if (distance < minDistance || (distance === minDistance && num > result)) {
      minDistance = distance;
      result = num;
    }
  }

  return result;
};
