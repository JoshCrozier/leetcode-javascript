/**
 * 1589. Maximum Sum Obtained of Any Permutation
 * https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/
 * Difficulty: Medium
 *
 * We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi].
 * The ith request asks for the sum of nums[starti] + nums[starti + 1] + ... + nums[endi - 1]
 * + nums[endi]. Both starti and endi are 0-indexed.
 *
 * Return the maximum total sum of all requests among all permutations of nums.
 *
 * Since the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function(nums, requests) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const freq = new Array(n + 1).fill(0);

  for (const [start, end] of requests) {
    freq[start]++;
    freq[end + 1]--;
  }

  const count = new Array(n).fill(0);
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += freq[i];
    count[i] = current;
  }

  count.sort((a, b) => b - a);
  nums.sort((a, b) => b - a);

  let total = 0;
  for (let i = 0; i < n; i++) {
    total = (total + nums[i] * count[i]) % MOD;
  }

  return total;
};
