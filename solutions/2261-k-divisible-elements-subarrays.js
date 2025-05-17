/**
 * 2261. K Divisible Elements Subarrays
 * https://leetcode.com/problems/k-divisible-elements-subarrays/
 * Difficulty: Medium
 *
 * Given an integer array nums and two integers k and p, return the number of distinct subarrays,
 * which have at most k elements that are divisible by p.
 *
 * Two arrays nums1 and nums2 are said to be distinct if:
 * - They are of different lengths, or
 * - There exists at least one index i where nums1[i] != nums2[i].
 *
 * A subarray is defined as a non-empty contiguous sequence of elements in an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
  const n = nums.length;
  const seen = new Set();

  for (let start = 0; start < n; start++) {
    const subarray = [];
    let divisibleCount = 0;

    for (let end = start; end < n; end++) {
      subarray.push(nums[end]);
      if (nums[end] % p === 0) divisibleCount++;

      if (divisibleCount <= k) {
        seen.add(subarray.join(','));
      }
    }
  }

  return seen.size;
};
