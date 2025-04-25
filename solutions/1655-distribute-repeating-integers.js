/**
 * 1655. Distribute Repeating Integers
 * https://leetcode.com/problems/distribute-repeating-integers/
 * Difficulty: Hard
 *
 * You are given an array of n integers, nums, where there are at most 50 unique values in
 * the array. You are also given an array of m customer order quantities, quantity, where
 * quantity[i] is the amount of integers the ith customer ordered. Determine if it is possible
 * to distribute nums such that:
 * - The ith customer gets exactly quantity[i] integers,
 * - The integers the ith customer gets are all equal, and
 * - Every customer is satisfied.
 *
 * Return true if it is possible to distribute nums according to the above conditions.
 */

/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
var canDistribute = function(nums, quantity) {
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const frequencies = Array.from(frequencyMap.values()).sort((a, b) => b - a);
  quantity.sort((a, b) => b - a);

  return canSatisfy(0, frequencies);

  function canSatisfy(index, counts) {
    if (index === quantity.length) return true;

    for (let i = 0; i < counts.length; i++) {
      if (counts[i] >= quantity[index]) {
        counts[i] -= quantity[index];
        if (canSatisfy(index + 1, counts)) return true;
        counts[i] += quantity[index];
      }
    }

    return false;
  }
};
