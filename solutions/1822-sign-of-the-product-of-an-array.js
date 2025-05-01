/**
 * 1822. Sign of the Product of an Array
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * Difficulty: Easy
 *
 * Implement a function signFunc(x) that returns:
 * - 1 if x is positive.
 * - -1 if x is negative.
 * - 0 if x is equal to 0.
 *
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 *
 * Return signFunc(product).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let negativeCount = 0;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativeCount++;
  }

  return negativeCount % 2 === 0 ? 1 : -1;
};
