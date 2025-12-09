/**
 * 3583. Count Special Triplets
 * https://leetcode.com/problems/count-special-triplets/
 * Difficulty: Medium
 *
 * You are given an integer array nums.
 *
 * A special triplet is defined as a triplet of indices (i, j, k) such that:
 * - 0 <= i < j < k < n, where n = nums.length
 * - nums[i] == nums[j] * 2
 * - nums[k] == nums[j] * 2
 *
 * Return the total number of special triplets in the array.
 *
 * Since the answer may be large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
  const MOD = 1e9 + 7;
  let result = 0;

  const leftCount = new Map();
  const rightCount = new Map();
  for (const num of nums) {
    rightCount.set(num, (rightCount.get(num) || 0) + 1);
  }

  for (let j = 0; j < nums.length; j++) {
    const middle = nums[j];
    const target = middle * 2;

    rightCount.set(middle, rightCount.get(middle) - 1);
    if (rightCount.get(middle) === 0) {
      rightCount.delete(middle);
    }

    const left = leftCount.get(target) || 0;
    const right = rightCount.get(target) || 0;
    result = (result + left * right) % MOD;
    leftCount.set(middle, (leftCount.get(middle) || 0) + 1);
  }

  return result;
};
