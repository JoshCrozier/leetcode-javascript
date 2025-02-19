/**
 * 3452. Sum of Good Numbers
 * https://leetcode.com/problems/sum-of-good-numbers/
 * Difficulty: Easy
 *
 * Given an array of integers nums and an integer k, an element nums[i] is considered good if
 * it is strictly greater than the elements at indices i - k and i + k (if those indices exist).
 * If neither of these indices exists, nums[i] is still considered good.
 *
 * Return the sum of all the good elements in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  return nums.reduce((sum, n, i) => {
    return n > (nums[i - k] ?? 0) && n > (nums[i + k] ?? 0) ? sum + n : sum;
  }, 0);
};
