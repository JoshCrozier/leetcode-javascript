/**
 * 2040. Kth Smallest Product of Two Sorted Arrays
 * https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/
 * Difficulty: Hard
 *
 * Given two sorted 0-indexed integer arrays nums1 and nums2 as well as an integer k, return
 * the kth (1-based) smallest product of nums1[i] * nums2[j] where 0 <= i < nums1.length
 * and 0 <= j < nums2.length.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
  function countProducts(maxProduct) {
    let count = 0;
    for (const num1 of nums1) {
      let left = 0;
      let right = nums2.length;

      if (num1 >= 0) {
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (num1 * nums2[mid] <= maxProduct) left = mid + 1;
          else right = mid;
        }
        count += left;
      } else {
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (num1 * nums2[mid] <= maxProduct) right = mid;
          else left = mid + 1;
        }
        count += nums2.length - left;
      }
    }
    return count;
  }

  let low = -(10 ** 10);
  let high = 10 ** 10;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (countProducts(mid) >= k) high = mid;
    else low = mid + 1;
  }

  return low;
};
