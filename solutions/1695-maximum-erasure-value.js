/**
 * 1695. Maximum Erasure Value
 * https://leetcode.com/problems/maximum-erasure-value/
 * Difficulty: Medium
 *
 * You are given an array of positive integers nums and want to erase a subarray containing unique
 * elements. The score you get by erasing the subarray is equal to the sum of its elements.
 *
 * Return the maximum score you can get by erasing exactly one subarray.
 *
 * An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is,
 * if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  const seen = new Set();
  let result = 0;
  let currentSum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    while (seen.has(nums[end])) {
      seen.delete(nums[start]);
      currentSum -= nums[start];
      start++;
    }
    seen.add(nums[end]);
    currentSum += nums[end];
    result = Math.max(result, currentSum);
  }

  return result;
};
