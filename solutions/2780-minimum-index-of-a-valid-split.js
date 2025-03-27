/**
 * 2780. Minimum Index of a Valid Split
 * https://leetcode.com/problems/minimum-index-of-a-valid-split/
 * Difficulty: Medium
 *
 * An element x of an integer array arr of length m is dominant if more than half the elements
 * of arr have a value of x.
 *
 * You are given a 0-indexed integer array nums of length n with one dominant element.
 *
 * You can split nums at an index i into two arrays nums[0, ..., i] and nums[i + 1, ..., n - 1],
 * but the split is only valid if:
 * - 0 <= i < n - 1
 * - nums[0, ..., i], and nums[i + 1, ..., n - 1] have the same dominant element.
 *
 * Here, nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j,
 * both ends being inclusive. Particularly, if j < i then nums[i, ..., j] denotes an empty subarray.
 *
 * Return the minimum index of a valid split. If no valid split exists, return -1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let dominantElement;
  for (const [num, count] of map) {
    if (count * 2 > nums.length) {
      dominantElement = num;
      break;
    }
  }

  let leftCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    leftCount += nums[i] === dominantElement ? 1 : 0;
    const rightCount = map.get(dominantElement) - leftCount;

    if (leftCount * 2 > i + 1 && rightCount * 2 > nums.length - i - 1) {
      return i;
    }
  }

  return -1;
};
