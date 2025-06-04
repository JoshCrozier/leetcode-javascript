/**
 * 2897. Apply Operations on Array to Maximize Sum of Squares
 * https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums and a positive integer k.
 *
 * You can do the following operation on the array any number of times:
 * - Choose any two distinct indices i and j and simultaneously update the values of nums[i]
 *   to (nums[i] AND nums[j]) and nums[j] to (nums[i] OR nums[j]). Here, OR denotes the bitwise
 *   OR operation, and AND denotes the bitwise AND operation.
 *
 * You have to choose k elements from the final array and calculate the sum of their squares.
 *
 * Return the maximum sum of squares you can achieve.
 *
 * Since the answer can be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
  const MOD = 1e9 + 7;
  const bitCounts = new Array(30).fill(0);

  for (const num of nums) {
    for (let i = 0; i < 30; i++) {
      if (num & (1 << i)) bitCounts[i]++;
    }
  }

  let result = 0;
  for (let i = 0; i < k; i++) {
    let current = 0;
    for (let j = 29; j >= 0; j--) {
      if (bitCounts[j] > 0) {
        current |= (1 << j);
        bitCounts[j]--;
      }
    }
    result = (result + Number((BigInt(current) * BigInt(current)) % BigInt(MOD))) % MOD;
  }

  return result;
};
