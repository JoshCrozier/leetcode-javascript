/**
 * 2342. Max Sum of a Pair With Equal Sum of Digits
 * https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums consisting of positive integers. You can choose two
 * indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal
 * to that of nums[j].
 *
 * Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices
 * i and j that satisfy the conditions.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
  const map = new Map();

  return nums.reduce((result, n) => {
    const key = n.toString().split('').reduce((sum, n) => +n + sum, 0);
    result = !map.has(key) ? result : Math.max(result, n + map.get(key));
    map.set(key, Math.max(map.get(key) ?? 0, n));

    return result;
  }, -1);
};
