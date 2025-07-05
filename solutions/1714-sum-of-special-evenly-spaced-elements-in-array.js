/**
 * 1714. Sum Of Special Evenly-Spaced Elements In Array
 * https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/
 * Difficulty: Hard
 *
 * You are given a 0-indexed integer array nums consisting of n non-negative integers.
 *
 * You are also given an array queries, where queries[i] = [xi, yi]. The answer to the ith
 * query is the sum of all nums[j] where xi <= j < n and (j - xi) is divisible by yi.
 *
 * Return an array answer where answer.length == queries.length and answer[i] is the answer
 * to the ith query modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var solve = function(nums, queries) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const threshold = Math.sqrt(n);
  const precomputed = new Map();

  for (let step = 1; step <= threshold; step++) {
    const suffixSums = new Array(n).fill(0);
    for (let start = n - 1; start >= 0; start--) {
      if (start + step < n) {
        suffixSums[start] = (nums[start] + suffixSums[start + step]) % MOD;
      } else {
        suffixSums[start] = nums[start];
      }
    }
    precomputed.set(step, suffixSums);
  }

  const result = [];

  for (const [startIndex, step] of queries) {
    if (step <= threshold) {
      result.push(precomputed.get(step)[startIndex] || 0);
    } else {
      let sum = 0;
      for (let i = startIndex; i < n; i += step) {
        sum = (sum + nums[i]) % MOD;
      }
      result.push(sum);
    }
  }

  return result;
};
