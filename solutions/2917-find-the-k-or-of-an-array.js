/**
 * 2917. Find the K-or of an Array
 * https://leetcode.com/problems/find-the-k-or-of-an-array/
 * Difficulty: Easy
 *
 * You are given an integer array nums, and an integer k. Let's introduce K-or operation
 * by extending the standard bitwise OR. In K-or, a bit position in the result is set to
 * 1 if at least k numbers in nums have a 1 in that position.
 *
 * Return the K-or of nums.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
  let result = 0;

  for (let bit = 0; bit < 31; bit++) {
    let count = 0;
    for (const num of nums) {
      if (num & (1 << bit)) count++;
    }
    if (count >= k) result |= (1 << bit);
  }

  return result;
};
