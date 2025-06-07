/**
 * 3038. Maximum Number of Operations With the Same Score I
 * https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/
 * Difficulty: Easy
 *
 * You are given an array of integers nums. Consider the following operation:
 * - Delete the first two elements nums and define the score of the operation as the sum of
 *   these two elements.
 *
 * You can perform this operation until nums contains fewer than two elements. Additionally,
 * the same score must be achieved in all operations.
 *
 * Return the maximum number of operations you can perform.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
  let result = 0;
  const targetScore = nums[0] + nums[1];

  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] + nums[i + 1] === targetScore) {
      result++;
    } else {
      break;
    }
  }

  return result;
};
