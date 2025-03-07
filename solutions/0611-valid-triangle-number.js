/**
 * 611. Valid Triangle Number
 * https://leetcode.com/problems/valid-triangle-number/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the number of triplets chosen from the array that
 * can make triangles if we take them as side lengths of a triangle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let count = 0;

  nums.sort((a, b) => a - b);

  for (let k = nums.length - 1; k >= 2; k--) {
    for (let i = 0, j = k - 1; i < j;) {
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return count;
};
