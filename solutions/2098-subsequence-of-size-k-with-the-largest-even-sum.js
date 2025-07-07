/**
 * 2098. Subsequence of Size K With the Largest Even Sum
 * https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k. Find the largest even sum of any
 * subsequence of nums that has a length of k.
 *
 * Return this sum, or -1 if such a sum does not exist.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no
 * elements without changing the order of the remaining elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestEvenSum = function(nums, k) {
  const evenNums = nums.filter(num => num % 2 === 0).sort((a, b) => b - a);
  const oddNums = nums.filter(num => num % 2 === 1).sort((a, b) => b - a);
  let result = -1;

  for (let evenCount = 0; evenCount <= Math.min(k, evenNums.length); evenCount++) {
    const oddCount = k - evenCount;
    if (oddCount > oddNums.length || oddCount % 2 === 1) continue;
    let currentSum = 0;
    for (let i = 0; i < evenCount; i++) {
      currentSum += evenNums[i];
    }
    for (let i = 0; i < oddCount; i++) {
      currentSum += oddNums[i];
    }
    result = Math.max(result, currentSum);
  }

  return result;
};
