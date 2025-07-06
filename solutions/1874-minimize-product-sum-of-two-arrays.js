/**
 * 1874. Minimize Product Sum of Two Arrays
 * https://leetcode.com/problems/minimize-product-sum-of-two-arrays/
 * Difficulty: Medium
 *
 * The product sum of two equal-length arrays a and b is equal to the sum of a[i] * b[i]
 * for all 0 <= i < a.length (0-indexed).
 * - For example, if a = [1,2,3,4] and b = [5,2,3,1], the product sum would be
 *   1*5 + 2*2 + 3*3 + 4*1 = 22.
 *
 * Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are
 * allowed to rearrange the order of the elements in nums1.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);

  return nums1.reduce((sum, val, i) => sum + val * nums2[i], 0);
};
