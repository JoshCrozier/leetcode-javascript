/**
 * 2354. Number of Excellent Pairs
 * https://leetcode.com/problems/number-of-excellent-pairs/
 * Difficulty: Hard
 *
 * You are given a 0-indexed positive integer array nums and a positive integer k.
 *
 * A pair of numbers (num1, num2) is called excellent if the following conditions are satisfied:
 * - Both the numbers num1 and num2 exist in the array nums.
 * - The sum of the number of set bits in num1 OR num2 and num1 AND num2 is greater than or equal
 *   to k, where OR is the bitwise OR operation and AND is the bitwise AND operation.
 *
 * Return the number of distinct excellent pairs.
 *
 * Two pairs (a, b) and (c, d) are considered distinct if either a != c or b != d. For example,
 * (1, 2) and (2, 1) are distinct.
 *
 * Note that a pair (num1, num2) such that num1 == num2 can also be excellent if you have at least
 * one occurrence of num1 in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function(nums, k) {
  const map = new Map();
  const set = new Set(nums);

  for (const num of set) {
    const bits = num.toString(2).split('0').join('').length;
    map.set(bits, (map.get(bits) || 0) + 1);
  }

  let result = 0;
  for (const [i, countI] of map) {
    for (const [j, countJ] of map) {
      if (i + j >= k) {
        result += countI * countJ;
      }
    }
  }

  return result;
};
