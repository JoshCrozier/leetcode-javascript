/**
 * 2344. Minimum Deletions to Make Array Divisible
 * https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/
 * Difficulty: Hard
 *
 * You are given two positive integer arrays nums and numsDivide. You can delete any number
 * of elements from nums.
 *
 * Return the minimum number of deletions such that the smallest element in nums divides
 * all the elements of numsDivide. If this is not possible, return -1.
 *
 * Note that an integer x divides y if y % x == 0.
 */

/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
  const targetGcd = numsDivide.reduce(gcd);
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (targetGcd % nums[i] === 0) {
      return i;
    }
  }

  return -1;

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
};
