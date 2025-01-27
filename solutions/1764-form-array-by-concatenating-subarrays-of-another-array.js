/**
 * 1764. Form Array by Concatenating Subarrays of Another Array
 * https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/
 * Difficulty: Medium
 *
 * You are given a 2D integer array groups of length n. You are also given an integer array nums.
 *
 * You are asked if you can choose n disjoint subarrays from the array nums such that the ith
 * subarray is equal to groups[i] (0-indexed), and if i > 0, the (i-1)th subarray appears before
 * the ith subarray in nums (i.e. the subarrays must be in the same order as groups).
 *
 * Return true if you can do this task, and false otherwise.
 *
 * Note that the subarrays are disjoint if and only if there is no index k such that nums[k]
 * belongs to more than one subarray. A subarray is a contiguous sequence of elements within
 * an array.
 */

/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
  const rows = groups.map(row => ',' + row.join(',') + ',');
  const joined = `,${nums.join(',')},`;

  for (let i = 0, offset = 0; i < rows.length; i++) {
    offset = joined.indexOf(rows[i], offset);
    if (offset === -1) {
      return false;
    }
    offset += rows[i].length - 1;
  }

  return true;
};
