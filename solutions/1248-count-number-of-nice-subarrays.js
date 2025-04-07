/**
 * 1248. Count Number of Nice Subarrays
 * https://leetcode.com/problems/count-number-of-nice-subarrays/
 * Difficulty: Medium
 *
 * Given an array of integers nums and an integer k. A continuous subarray is called nice if there
 * are k odd numbers on it.
 *
 * Return the number of nice sub-arrays.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const prefix = new Map([[0, 1]]);
  let oddCount = 0;
  let result = 0;

  for (const num of nums) {
    oddCount += num % 2;
    result += prefix.get(oddCount - k) || 0;
    prefix.set(oddCount, (prefix.get(oddCount) || 0) + 1);
  }

  return result;
};
