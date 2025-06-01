/**
 * 2763. Sum of Imbalance Numbers of All Subarrays
 * https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/
 * Difficulty: Hard
 *
 * The imbalance number of a 0-indexed integer array arr of length n is defined as the number
 * of indices in sarr = sorted(arr) such that:
 * - 0 <= i < n - 1, and
 * - sarr[i+1] - sarr[i] > 1
 *
 * Here, sorted(arr) is the function that returns the sorted version of arr.
 *
 * Given a 0-indexed integer array nums, return the sum of imbalance numbers of all its subarrays.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function(nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const seen = new Set();
    let imbalance = 0;

    for (let j = i; j < n; j++) {
      const current = nums[j];

      if (!seen.has(current)) {
        const hasNext = seen.has(current + 1);
        const hasPrev = seen.has(current - 1);

        if (hasNext && hasPrev) {
          imbalance--;
        } else if (!hasNext && !hasPrev && seen.size > 0) {
          imbalance++;
        }

        seen.add(current);
      }

      result += imbalance;
    }
  }

  return result;
};
