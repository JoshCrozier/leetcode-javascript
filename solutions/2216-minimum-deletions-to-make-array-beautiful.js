/**
 * 2216. Minimum Deletions to Make Array Beautiful
 * https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. The array nums is beautiful if:
 * - nums.length is even.
 * - nums[i] != nums[i + 1] for all i % 2 == 0.
 *
 * Note that an empty array is considered beautiful.
 *
 * You can delete any number of elements from nums. When you delete an element, all the elements
 * to the right of the deleted element will be shifted one unit to the left to fill the gap
 * created and all the elements to the left of the deleted element will remain unchanged.
 *
 * Return the minimum number of elements to delete from nums to make it beautiful.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
  let result = 0;
  let i = 0;

  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      result++;
      i++;
    } else {
      i += 2;
    }
  }

  if ((nums.length - result) % 2 !== 0) {
    result++;
  }

  return result;
};
