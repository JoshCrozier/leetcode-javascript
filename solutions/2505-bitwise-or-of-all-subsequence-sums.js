/**
 * 2505. Bitwise OR of All Subsequence Sums
 * https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the value of the bitwise OR of the sum of all possible
 * subsequences in the array.
 *
 * A subsequence is a sequence that can be derived from another sequence by removing zero or
 * more elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceSumOr = function(nums) {
  const bitCounts = new Array(64).fill(0n);

  for (const num of nums) {
    for (let bit = 0; bit < 31; bit++) {
      if (num & (1 << bit)) {
        bitCounts[bit]++;
      }
    }
  }

  for (let bit = 0; bit < 63; bit++) {
    bitCounts[bit + 1] += bitCounts[bit] / 2n;
  }

  let result = 0n;
  for (let bit = 63; bit >= 0; bit--) {
    result = (result << 1n) | (bitCounts[bit] > 0n ? 1n : 0n);
  }

  return Number(result);
};
