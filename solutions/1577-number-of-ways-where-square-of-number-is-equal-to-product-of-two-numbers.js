/**
 * 1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers
 * https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/
 * Difficulty: Medium
 *
 * Given two arrays of integers nums1 and nums2, return the number of triplets formed (type 1 and
 * type 2) under the following rules:
 * - Type 1: Triplet (i, j, k) if nums1[i]2 == nums2[j] * nums2[k] where 0 <= i < nums1.length
 *   and 0 <= j < k < nums2.length.
 * - Type 2: Triplet (i, j, k) if nums2[i]2 == nums1[j] * nums1[k] where 0 <= i < nums2.length
 *   and 0 <= j < k < nums1.length.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
  return countTriplets(nums1, nums2) + countTriplets(nums2, nums1);

  function countTriplets(arr1, arr2) {
    const productMap = new Map();
    let count = 0;

    for (let i = 0; i < arr2.length; i++) {
      for (let j = i + 1; j < arr2.length; j++) {
        const product = BigInt(arr2[i]) * BigInt(arr2[j]);
        productMap.set(product, (productMap.get(product) || 0) + 1);
      }
    }

    for (const num of arr1) {
      const square = BigInt(num) * BigInt(num);
      if (productMap.has(square)) {
        count += productMap.get(square);
      }
    }

    return count;
  }
};
