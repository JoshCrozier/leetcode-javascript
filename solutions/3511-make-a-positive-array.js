/**
 * 3511. Make a Positive Array
 * https://leetcode.com/problems/make-a-positive-array/
 * Difficulty: Medium
 *
 * You are given an array nums. An array is considered positive if the sum of all numbers in
 * each subarray with more than two elements is positive.
 *
 * You can perform the following operation any number of times:
 * - Replace one element in nums with any integer between -1018 and 1018.
 *
 * Find the minimum number of operations needed to make nums positive.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var makeArrayPositive = function(nums) {
  let result = 0;
  let lowestSum = nums[0] + nums[1];

  for (let i = 2; i < nums.length; i++) {
    const currentValue = nums[i];
    const currentTriplet = currentValue + nums[i - 1] + nums[i - 2];
    lowestSum = Math.min(lowestSum + currentValue, currentTriplet);

    if (lowestSum <= 0) {
      nums[i] = lowestSum = 10 ** 18;
      result++;
    }
  }

  return result;
};
