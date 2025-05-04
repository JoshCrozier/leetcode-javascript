/**
 * 1968. Array With Elements Not Equal to Average of Neighbors
 * https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums of distinct integers. You want to rearrange the elements
 * in the array such that every element in the rearranged array is not equal to the average of
 * its neighbors.
 *
 * More formally, the rearranged array should have the property such that for every i in the
 * range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i].
 *
 * Return any rearrangement of nums that meets the requirements.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const result = new Array(nums.length);
  nums.sort((a, b) => a - b);

  for (let i = 0, left = 0, right = nums.length - 1; i < nums.length; i++) {
    result[i] = i % 2 === 0 ? nums[left++] : nums[right--];
  }

  return result;
};
