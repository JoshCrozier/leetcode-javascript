/**
 * 1726. Tuple with Same Product
 * https://leetcode.com/problems/tuple-with-same-product/
 * Difficulty: Medium
 *
 * Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d)
 * such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      map.set(nums[i] * nums[j], map.get(nums[i] * nums[j]) + 1 || 1);
    }
  }

  Array.from(map).forEach(([key, value]) => {
    count += value > 1 ? value * (value - 1) / 2 : 0;
  });

  return count * 8;
};
