/**
 * 719. Find K-th Smallest Pair Distance
 * https://leetcode.com/problems/find-k-th-smallest-pair-distance/
 * Difficulty: Hard
 *
 * The distance of a pair of integers a and b is defined as the absolute difference between a and b.
 *
 * Given an integer array nums and an integer k, return the kth smallest distance among all the
 * pairs nums[i] and nums[j] where 0 <= i < j < nums.length.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    let count = 0;
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
      while (j < nums.length && nums[j] - nums[i] <= middle) j++;
      count += j - i - 1;
    }

    if (count < k) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
};
