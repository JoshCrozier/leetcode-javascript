/**
 * 2615. Sum of Distances
 * https://leetcode.com/problems/sum-of-distances/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. There exists an array arr of length nums.length,
 * where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. If there
 * is no such j, set arr[i] to be 0.
 *
 * Return the array arr.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
  const valueIndices = new Map();
  const result = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (!valueIndices.has(nums[i])) {
      valueIndices.set(nums[i], []);
    }
    valueIndices.get(nums[i]).push(i);
  }

  for (const indices of valueIndices.values()) {
    let prefixSum = 0;
    for (let i = 1; i < indices.length; i++) {
      prefixSum += indices[i] - indices[0];
    }

    result[indices[0]] = prefixSum;

    for (let i = 1; i < indices.length; i++) {
      const diff = indices[i] - indices[i - 1];
      prefixSum += diff * (i - (indices.length - i));
      result[indices[i]] = prefixSum;
    }
  }

  return result;
};
