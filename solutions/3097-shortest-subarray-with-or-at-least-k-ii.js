/**
 * 3097. Shortest Subarray With OR at Least K II
 * https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/
 * Difficulty: Medium
 *
 * You are given an array nums of non-negative integers and an integer k.
 *
 * An array is called special if the bitwise OR of all of its elements is at least k.
 *
 * Return the length of the shortest special non-empty subarray of nums, or return -1 if no
 * special subarray exists.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  if (k === 0) return 1;

  const bitCounts = new Array(32).fill(0);
  let minLength = Infinity;
  let orValue = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right];
    for (let bit = 0; bit < 32; bit++) {
      if (num & (1 << bit)) bitCounts[bit]++;
      if (bitCounts[bit] > 0) orValue |= 1 << bit;
    }

    while (orValue >= k && left <= right) {
      minLength = Math.min(minLength, right - left + 1);
      const leftNum = nums[left];
      for (let bit = 0; bit < 32; bit++) {
        if (leftNum & (1 << bit)) {
          bitCounts[bit]--;
          if (bitCounts[bit] === 0) orValue &= ~(1 << bit);
        }
      }
      left++;
    }
  }

  return minLength === Infinity ? -1 : minLength;
};
