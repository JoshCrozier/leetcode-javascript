/**
 * 2599. Make the Prefix Sum Non-negative
 * https://leetcode.com/problems/make-the-prefix-sum-non-negative/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. You can apply the following operation any
 * number of times:
 * - Pick any element from nums and put it at the end of nums.
 *
 * The prefix sum array of nums is an array prefix of the same length as nums such that prefix[i]
 * is the sum of all the integers nums[j] where j is in the inclusive range [0, i].
 *
 * Return the minimum number of operations such that the prefix sum array does not contain negative
 * integers. The test cases are generated such that it is always possible to make the prefix sum
 * array non-negative.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var makePrefSumNonNegative = function(nums) {
  const minHeap = new PriorityQueue((a, b) => a - b);
  let prefixSum = 0;
  let result = 0;

  for (const num of nums) {
    prefixSum += num;

    if (num < 0) {
      minHeap.enqueue(num);
    }

    if (prefixSum < 0) {
      const minNegative = minHeap.dequeue();
      prefixSum -= minNegative;
      result++;
    }
  }

  return result;
};
