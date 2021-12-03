/**
 * 1481. Least Number of Unique Integers after K Removals
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
 * Difficulty: Medium
 *
 * Given an array of integers arr and an integer k. Find the least number of
 * unique integers after removing exactly k elements.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const map = new Map();
  arr.forEach(n => map.set(n, map.has(n) ? map.get(n) + 1 : 1));

  const sorted = [...map.values()].sort((a, b) => a - b);
  while (k && sorted.length && sorted[0] <= k) {
    k -= sorted[0];
    sorted.shift();
  }

  return sorted.length;
};
