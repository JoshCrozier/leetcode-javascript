/**
 * 1424. Diagonal Traverse II
 * https://leetcode.com/problems/diagonal-traverse-ii/
 * Difficulty: Medium
 *
 * Given a 2D integer array nums, return all elements of nums in diagonal order as shown
 * in the below images.
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
  const diagonalGroups = [];

  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      const sum = row + col;
      if (!diagonalGroups[sum]) {
        diagonalGroups[sum] = [];
      }
      diagonalGroups[sum].push(nums[row][col]);
    }
  }

  const result = [];
  for (const group of diagonalGroups) {
    if (group) {
      result.push(...group.reverse());
    }
  }

  return result;
};
