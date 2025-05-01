/**
 * 1838. Frequency of the Most Frequent Element
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 * Difficulty: Medium
 *
 * The frequency of an element is the number of times it occurs in an array.
 *
 * You are given an integer array nums and an integer k. In one operation, you can choose
 * an index of nums and increment the element at that index by 1.
 *
 * Return the maximum possible frequency of an element after performing at most k operations.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b);

  let result = 0;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum + k < nums[right] * (right - left + 1)) {
      currentSum -= nums[left];
      left++;
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
};
