/**
 * 2364. Count Number of Bad Pairs
 * https://leetcode.com/problems/count-number-of-bad-pairs/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair
 * if i < j and j - i != nums[j] - nums[i].
 *
 * Return the total number of bad pairs in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
  const map = new Map();
  let result = nums.length * (nums.length - 1) / 2;

  nums.forEach((n, i) => {
    result -= map.get(n - i) ?? 0;
    map.set(n - i, (map.get(n - i) ?? 0) + 1);
  });

  return result;
};
