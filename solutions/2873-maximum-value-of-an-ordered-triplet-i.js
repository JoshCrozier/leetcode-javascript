/**
 * 2873. Maximum Value of an Ordered Triplet I
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums.
 *
 * Return the maximum value over all triplets of indices (i, j, k) such that i < j < k.
 * If all such triplets have a negative value, return 0.
 *
 * The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const diff = nums[i] - nums[j];
      if (diff <= 0) continue;
      for (let k = j + 1; k < nums.length; k++) {
        result = Math.max(result, diff * nums[k]);
      }
    }
  }

  return result;
};
