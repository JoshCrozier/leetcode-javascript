/**
 * 1814. Count Nice Pairs in an Array
 * https://leetcode.com/problems/count-nice-pairs-in-an-array/
 * Difficulty: Medium
 *
 * You are given an array nums that consists of non-negative integers. Let us define rev(x)
 * as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21.
 * A pair of indices (i, j) is nice if it satisfies all of the following conditions:
 * - 0 <= i < j < nums.length
 * - nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 *
 * Return the number of nice pairs of indices. Since that number can be too large, return it
 * modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  const MOD = 1e9 + 7;
  const map = new Map();
  let result = 0;

  for (const num of nums) {
    const diff = num - reverseNumber(num);
    const count = map.get(diff) || 0;
    result = (result + count) % MOD;
    map.set(diff, count + 1);
  }

  return result;

  function reverseNumber(num) {
    return Number(String(num).split('').reverse().join(''));
  }
};
