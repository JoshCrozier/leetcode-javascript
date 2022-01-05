/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j,
 * i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = new Set();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (!sum) {
        result.add(JSON.stringify([nums[i], nums[j++], nums[k--]]));
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return [...result].map(JSON.parse);
};
