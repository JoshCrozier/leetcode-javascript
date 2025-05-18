/**
 * 2275. Largest Combination With Bitwise AND Greater Than Zero
 * https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/
 * Difficulty: Medium
 *
 * The bitwise AND of an array nums is the bitwise AND of all integers in nums.
 * - For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
 * - Also, for nums = [7], the bitwise AND is 7.
 *
 * You are given an array of positive integers candidates. Compute the bitwise AND for all
 * possible combinations of elements in the candidates array.
 *
 * Return the size of the largest combination of candidates with a bitwise AND greater than 0.
 */

/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  const bitCounts = new Array(32).fill(0);
  let result = 0;

  for (const num of candidates) {
    for (let i = 0; i < 32; i++) {
      if (num & (1 << i)) {
        bitCounts[i]++;
      }
    }
  }

  for (const count of bitCounts) {
    result = Math.max(result, count);
  }

  return result;
};
