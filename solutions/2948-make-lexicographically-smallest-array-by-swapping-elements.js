/**
 * 2948. Make Lexicographically Smallest Array by Swapping Elements
 * https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of positive integers nums and a positive integer limit.
 *
 * In one operation, you can choose any two indices i and j and swap nums[i] and nums[j]
 * if |nums[i] - nums[j]| <= limit.
 *
 * Return the lexicographically smallest array that can be obtained by performing the
 * operation any number of times.
 *
 * An array a is lexicographically smaller than an array b if in the first position where
 * a and b differ, array a has an element that is less than the corresponding element in b.
 * For example, the array [2,10,3] is lexicographically smaller than the array [10,2,3]
 * because they differ at index 0 and 2 < 10.
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
  const keys = new Array(nums.length).fill(0).map((_, i) => i);
  keys.sort((i, j) => nums[i] - nums[j]);

  const result = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length;) {
    let j = i + 1;

    while (j < nums.length && nums[keys[j]] - nums[keys[j - 1]] <= limit) {
      j++;
    }

    const keyRange = keys.slice(i, j).sort((a, b) => a - b);
    for (let k = 0; k < keyRange.length; k++) {
      result[keyRange[k]] = nums[keys[i + k]];
    }
    i = j;
  }

  return result;
};
