/**
 * 1879. Minimum XOR Sum of Two Arrays
 * https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/
 * Difficulty: Hard
 *
 * You are given two integer arrays nums1 and nums2 of length n.
 *
 * The XOR sum of the two integer arrays is (nums1[0] XOR nums2[0]) + (nums1[1] XOR nums2[1])
 * + ... + (nums1[n - 1] XOR nums2[n - 1]) (0-indexed).
 * - For example, the XOR sum of [1,2,3] and [3,2,1] is equal to (1 XOR 3) + (2 XOR 2) +
 *   (3 XOR 1) = 2 + 0 + 2 = 4.
 *
 * Rearrange the elements of nums2 such that the resulting XOR sum is minimized.
 *
 * Return the XOR sum after the rearrangement.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function(nums1, nums2) {
  const n = nums1.length;
  const dp = new Array(1 << n).fill(Infinity);
  dp[0] = 0;

  for (let mask = 0; mask < (1 << n); mask++) {
    const usedCount = mask.toString(2).split('1').length - 1;
    for (let j = 0; j < n; j++) {
      if (!(mask & (1 << j))) {
        const newMask = mask | (1 << j);
        dp[newMask] = Math.min(dp[newMask], dp[mask] + (nums1[usedCount] ^ nums2[j]));
      }
    }
  }

  return dp[(1 << n) - 1];
};
