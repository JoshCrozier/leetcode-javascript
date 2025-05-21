/**
 * 2367. Number of Arithmetic Triplets
 * https://leetcode.com/problems/number-of-arithmetic-triplets/
 * Difficulty: Easy
 *
 * You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff.
 * A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
 * - i < j < k,
 * - nums[j] - nums[i] == diff, and
 * - nums[k] - nums[j] == diff.
 *
 * Return the number of unique arithmetic triplets.
 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  let result = 0;

  for (let j = 1; j < nums.length - 1; j++) {
    let i = j - 1;
    let k = j + 1;

    while (i >= 0 && nums[j] - nums[i] <= diff) {
      if (nums[j] - nums[i] === diff) {
        while (k < nums.length && nums[k] - nums[j] <= diff) {
          if (nums[k] - nums[j] === diff) {
            result++;
          }
          k++;
        }
      }
      i--;
    }
  }

  return result;
};
