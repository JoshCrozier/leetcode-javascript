/**
 * 2610. Convert an Array Into a 2D Array With Conditions
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * Difficulty: Medium
 *
 * You are given an integer array nums. You need to create a 2D array from nums satisfying
 * the following conditions:
 * - The 2D array should contain only the elements of the array nums.
 * - Each row in the 2D array contains distinct integers.
 * - The number of rows in the 2D array should be minimal.
 *
 * Return the resulting array. If there are multiple answers, return any of them.
 *
 * Note that the 2D array can have a different number of elements on each row.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  const frequency = new Map();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  const result = [];
  while (frequency.size) {
    const row = [];
    for (const [num, count] of frequency) {
      row.push(num);
      if (count === 1) {
        frequency.delete(num);
      } else {
        frequency.set(num, count - 1);
      }
    }
    result.push(row);
  }

  return result;
};
