/**
 * 2656. Maximum Sum With Exactly K Elements
 * https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums and an integer k. Your task is to perform
 * the following operation exactly k times in order to maximize your score:
 * 1. Select an element m from nums.
 * 2. Remove the selected element m from the array.
 * 3. Add a new element with a value of m + 1 to the array.
 * 4. Increase your score by m.
 *
 * Return the maximum score you can achieve after performing the operation exactly k times.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  return k * Math.max(...nums) + k * (k - 1) / 2;
};
