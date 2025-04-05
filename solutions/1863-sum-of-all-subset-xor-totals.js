/**
 * 1863. Sum of All Subset XOR Totals
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals/
 * Difficulty: Easy
 *
 * The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if
 * the array is empty.
 *
 * For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
 * Given an array nums, return the sum of all XOR totals for every subset of nums.
 * Note: Subsets with the same elements should be counted multiple times.
 *
 * An array a is a subset of an array b if a can be obtained from b by deleting some (possibly
 * zero) elements of b.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  const totalSubsets = 1 << nums.length;
  let result = 0;

  for (let mask = 0; mask < totalSubsets; mask++) {
    let currentXOR = 0;
    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) {
        currentXOR ^= nums[i];
      }
    }
    result += currentXOR;
  }

  return result;
};
