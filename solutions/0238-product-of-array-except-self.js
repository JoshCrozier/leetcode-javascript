/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const emptyResult = new Array(nums.length).fill(0);
  const zeroCount = nums.filter(n => n === 0).length;
  if (zeroCount > 1) {
    return emptyResult;
  }
  const product = nums.reduce((product, n) => product * (n === 0 ? 1 : n), 1);
  if (zeroCount === 1) {
    emptyResult[nums.indexOf(0)] = product;
    return emptyResult;
  }
  return nums.map(n => product / n);
};
