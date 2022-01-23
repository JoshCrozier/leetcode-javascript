/**
 * 414. Third Maximum Number
 * https://leetcode.com/problems/third-maximum-number/
 * Difficulty: Easy
 *
 * Given an integer array nums, return the third distinct maximum number in this array.
 * If the third maximum does not exist, return the maximum number.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const sortedSet = [...new Set(nums)].sort((a, b) => a - b);
  const thirdMax = sortedSet[sortedSet.length - 3];

  return thirdMax !== undefined
    ? thirdMax
    : sortedSet[sortedSet.length - 1];
};
