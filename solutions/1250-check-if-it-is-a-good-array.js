/**
 * 1250. Check If It Is a Good Array
 * https://leetcode.com/problems/check-if-it-is-a-good-array/
 * Difficulty: Hard
 *
 * Given an array nums of positive integers. Your task is to select some subset of nums, multiply
 * each element by an integer and add all these numbers. The array is said to be good if you can
 * obtain a sum of 1 from the array by any possible subset and multiplicand.
 *
 * Return True if the array is good otherwise return False.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
  let gcd = nums[0];

  for (let num of nums) {
    while (num !== 0) {
      const temp = gcd % num;
      gcd = num;
      num = temp;
    }
    if (gcd === 1) return true;
  }

  return gcd === 1;
};
