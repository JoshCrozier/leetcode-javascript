/**
 * 2295. Replace Elements in an Array
 * https://leetcode.com/problems/replace-elements-in-an-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums that consists of n distinct positive integers.
 * Apply m operations to this array, where in the ith operation you replace the number
 * operations[i][0] with operations[i][1].
 *
 * It is guaranteed that in the ith operation:
 * - operations[i][0] exists in nums.
 * - operations[i][1] does not exist in nums.
 *
 * Return the array obtained after applying all the operations.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (const [oldVal, newVal] of operations) {
    const index = map.get(oldVal);
    nums[index] = newVal;
    map.set(newVal, index);
    map.delete(oldVal);
  }

  return nums;
};
