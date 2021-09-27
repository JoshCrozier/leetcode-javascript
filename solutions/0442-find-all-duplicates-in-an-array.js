/**
 * 442. Find All Duplicates in an Array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * Difficulty: Medium
 *
 * Given an integer array nums of length n where all the integers of nums
 * are in the range [1, n] and each integer appears once or twice, return
 * an array of all the integers that appears twice.
 *
 * You must write an algorithm that runs in O(n) time and uses only constant
 * extra space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = [];

  nums.forEach((num, i) => {
    const key = Math.abs(num) - 1;
    if (nums[key] < 0) {
      result.push(Math.abs(num));
    } else {
      nums[key] *= -1;
    }
  });

  return result;
};
