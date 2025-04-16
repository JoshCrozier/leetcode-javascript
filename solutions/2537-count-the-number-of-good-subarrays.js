/**
 * 2537. Count the Number of Good Subarrays
 * https://leetcode.com/problems/count-the-number-of-good-subarrays/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return the number of good subarrays of nums.
 *
 * A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j
 * and arr[i] == arr[j].
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
  const frequency = new Map();
  let result = 0;
  let currentPairs = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right];
    const prevCount = frequency.get(num) || 0;
    currentPairs += prevCount;
    frequency.set(num, prevCount + 1);

    while (currentPairs >= k) {
      result += nums.length - right;
      const leftNum = nums[left];
      const leftCount = frequency.get(leftNum);
      currentPairs -= leftCount - 1;
      frequency.set(leftNum, leftCount - 1);
      left++;
    }
  }

  return result;
};
