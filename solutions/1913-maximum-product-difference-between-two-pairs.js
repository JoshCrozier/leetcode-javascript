/**
 * 1913. Maximum Product Difference Between Two Pairs
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 * Difficulty: Easy
 *
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
 * - For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
 *
 * Given an integer array nums, choose four distinct indices w, x, y, and z such that the product
 * difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
 *
 * Return the maximum such product difference.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  let max1 = 0;
  let max2 = 0;
  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return max1 * max2 - min1 * min2;
};
