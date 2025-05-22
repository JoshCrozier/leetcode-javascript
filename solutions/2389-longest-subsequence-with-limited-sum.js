/**
 * 2389. Longest Subsequence With Limited Sum
 * https://leetcode.com/problems/longest-subsequence-with-limited-sum/
 * Difficulty: Easy
 *
 * You are given an integer array nums of length n, and an integer array queries of length m.
 *
 * Return an array answer of length m where answer[i] is the maximum size of a subsequence that
 * you can take from nums such that the sum of its elements is less than or equal to queries[i].
 *
 * A subsequence is an array that can be derived from another array by deleting some or no elements
 * without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  nums.sort((a, b) => a - b);
  const prefixSums = [0];
  for (const num of nums) {
    prefixSums.push(prefixSums.at(-1) + num);
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      const mid = Math.floor((left + right + 1) / 2);
      if (prefixSums[mid] <= queries[i]) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    result[i] = left;
  }

  return result;
};
