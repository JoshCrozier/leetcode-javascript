/**
 * 2670. Find the Distinct Difference Array
 * https://leetcode.com/problems/find-the-distinct-difference-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array nums of length n.
 *
 * The distinct difference array of nums is an array diff of length n such that diff[i] is
 * equal to the number of distinct elements in the suffix nums[i + 1, ..., n - 1] subtracted
 * from the number of distinct elements in the prefix nums[0, ..., i].
 *
 * Return the distinct difference array of nums.
 *
 * Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at
 * index j inclusive. Particularly, if i > j then nums[i, ..., j] denotes an empty subarray.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
  const n = nums.length;
  const result = new Array(n);
  const prefixSet = new Set();
  const suffixCount = new Map();

  for (const num of nums) {
    suffixCount.set(num, (suffixCount.get(num) || 0) + 1);
  }

  let suffixDistinct = suffixCount.size;

  for (let i = 0; i < n; i++) {
    prefixSet.add(nums[i]);
    const count = suffixCount.get(nums[i]);
    suffixCount.set(nums[i], count - 1);
    if (count === 1) {
      suffixCount.delete(nums[i]);
      suffixDistinct--;
    }
    result[i] = prefixSet.size - suffixDistinct;
  }

  return result;
};
