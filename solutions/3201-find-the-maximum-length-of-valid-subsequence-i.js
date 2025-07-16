/**
 * 3201. Find the Maximum Length of Valid Subsequence I
 * https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/
 * Difficulty: Medium
 *
 * You are given an integer array nums.
 *
 * A subsequence sub of nums with length x is called valid if it satisfies:
 * - (sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2.
 *
 * Return the length of the longest valid subsequence of nums.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no
 * elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
  const evenCount = nums.filter(num => num % 2 === 0).length;
  const oddCount = nums.length - evenCount;

  let alternatingCount = 0;
  let lastParity = -1;
  for (const num of nums) {
    const currentParity = num % 2;
    if (lastParity === -1 || currentParity !== lastParity) {
      alternatingCount++;
      lastParity = currentParity;
    }
  }

  return Math.max(evenCount, oddCount, alternatingCount);
};
