/**
 * 1911. Maximum Alternating Subsequence Sum
 * https://leetcode.com/problems/maximum-alternating-subsequence-sum/
 * Difficulty: Medium
 *
 * The alternating sum of a 0-indexed array is defined as the sum of the elements at even
 * indices minus the sum of the elements at odd indices.
 * - For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.
 *
 * Given an array nums, return the maximum alternating sum of any subsequence of nums (after
 * reindexing the elements of the subsequence).
 *
 * A subsequence of an array is a new array generated from the original array by deleting some
 * elements (possibly none) without changing the remaining elements' relative order. For
 * example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements),
 * while [2,4,2] is not.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let result = 0;
  let oddSum = 0;

  for (const num of nums) {
    const prevEven = result;
    result = Math.max(result, oddSum + num);
    oddSum = Math.max(oddSum, prevEven - num);
  }

  return result;
};
