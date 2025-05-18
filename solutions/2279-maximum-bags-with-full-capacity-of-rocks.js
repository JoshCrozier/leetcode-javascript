/**
 * 2279. Maximum Bags With Full Capacity of Rocks
 * https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/
 * Difficulty: Medium
 *
 * You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity
 * and rocks. The ith bag can hold a maximum of capacity[i] rocks and currently contains rocks[i]
 * rocks. You are also given an integer additionalRocks, the number of additional rocks you can
 * place in any of the bags.
 *
 * Return the maximum number of bags that could have full capacity after placing the additional
 * rocks in some bags.
 */

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  const remaining = capacity.map((cap, i) => cap - rocks[i]);
  remaining.sort((a, b) => a - b);

  let result = 0;
  let rocksLeft = additionalRocks;

  for (const needed of remaining) {
    if (needed <= rocksLeft) {
      result++;
      rocksLeft -= needed;
    } else {
      break;
    }
  }

  return result;
};
