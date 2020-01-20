/**
 * 1313. Decompress Run-Length Encoded List
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 * Difficulty: Easy
 *
 * We are given a list nums of integers representing a list compressed with run-length encoding.
 *
 * Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).
 * For each such pair, there are a elements with value b in the decompressed list.
 *
 * Return the decompressed list.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums, result = []) {
  for (let i = 0; i < nums.length; i += 2) {
    result.push(...new Array(nums[i]).fill(nums[i + 1]));
  }
  return result;
};
