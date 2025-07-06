/**
 * 1983. Widest Pair of Indices With Equal Range Sum
 * https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/
 * Difficulty: Medium
 *
 * You are given two 0-indexed binary arrays nums1 and nums2. Find the widest pair of indices (i, j)
 * such that i <= j and nums1[i] + nums1[i+1] + ... + nums1[j] == nums2[i] + nums2[i+1] + ... +
 * nums2[j].
 *
 * The widest pair of indices is the pair with the largest distance between i and j. The distance
 * between a pair of indices is defined as j - i + 1.
 *
 * Return the distance of the widest pair of indices. If no pair of indices meets the conditions,
 * return 0.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var widestPairOfIndices = function(nums1, nums2) {
  const n = nums1.length;
  const map = new Map();
  map.set(0, -1);

  let prefixDiff = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    prefixDiff += nums1[i] - nums2[i];

    if (map.has(prefixDiff)) {
      const distance = i - map.get(prefixDiff);
      result = Math.max(result, distance);
    } else {
      map.set(prefixDiff, i);
    }
  }

  return result;
};
