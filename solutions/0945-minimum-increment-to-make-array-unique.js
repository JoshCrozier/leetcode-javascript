/**
 * 945. Minimum Increment to Make Array Unique
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 * Difficulty: Medium
 *
 * You are given an integer array nums. In one move, you can pick an index i where
 * 0 <= i < nums.length and increment nums[i] by 1.
 *
 * Return the minimum number of moves to make every value in nums unique.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 1, previous = nums[0]; i < nums.length; i++) {
    if (nums[i] <= previous) {
      previous++;
      result += previous - nums[i];
    } else {
      previous = nums[i];
    }
  }

  return result;
};
