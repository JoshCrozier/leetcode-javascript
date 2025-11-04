/**
 * 3318. Find X-Sum of All K-Long Subarrays I
 * https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/
 * Difficulty: Easy
 *
 * You are given an array nums of n integers and two integers k and x.
 *
 * The x-sum of an array is calculated by the following procedure:
 * - Count the occurrences of all elements in the array.
 * - Keep only the occurrences of the top x most frequent elements. If two elements
 *   have the same number of occurrences, the element with the bigger value is
 *   considered more frequent.
 * - Calculate the sum of the resulting array.
 *
 * Note that if an array has less than x distinct elements, its x-sum is the sum of the array.
 *
 Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the
 subarray nums[i..i + k - 1].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i <= n - k; i++) {
    const subarray = nums.slice(i, i + k);
    result.push(helper(subarray));
  }

  return result;

  function helper(subarray) {
    const frequency = new Map();

    for (const num of subarray) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    const elements = Array.from(frequency.entries());
    elements.sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return b[0] - a[0];
    });

    const topX = elements.slice(0, x);
    let sum = 0;

    for (const [value, count] of topX) {
      sum += value * count;
    }

    return sum;
  }
};
