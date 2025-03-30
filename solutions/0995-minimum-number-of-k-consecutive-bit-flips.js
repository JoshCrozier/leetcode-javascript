/**
 * 995. Minimum Number of K Consecutive Bit Flips
 * https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/
 * Difficulty: Hard
 *
 * You are given a binary array nums and an integer k.
 *
 * A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in
 * the subarray to 1, and every 1 in the subarray to 0.
 *
 * Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is
 * not possible, return -1.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
  const queue = [];
  let flipCount = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (queue.length && queue[0] === i) {
      queue.shift();
      flipCount--;
    }

    if ((nums[i] + flipCount) % 2 === 0) {
      if (i + k > nums.length) return -1;
      result++;
      flipCount++;
      queue.push(i + k);
    }
  }

  return result;
};
