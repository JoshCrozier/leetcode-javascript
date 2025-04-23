/**
 * 1630. Arithmetic Subarrays
 * https://leetcode.com/problems/arithmetic-subarrays/
 * Difficulty: Medium
 *
 * A sequence of numbers is called arithmetic if it consists of at least two elements, and the
 * difference between every two consecutive elements is the same. More formally, a sequence s
 * is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.
 *
 * For example, these are arithmetic sequences:
 * - 1, 3, 5, 7, 9
 * - 7, 7, 7, 7
 * - 3, -1, -5, -9
 *
 * The following sequence is not arithmetic:
 * - 1, 1, 2, 5, 7
 *
 * You are given an array of n integers, nums, and two arrays of m integers each, l and r,
 * representing the m range queries, where the ith query is the range [l[i], r[i]]. All the
 * arrays are 0-indexed.
 *
 * Return a list of boolean elements answer, where answer[i] is true if the subarray
 * nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic
 * sequence, and false otherwise.
 */

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  return l.map((start, index) => {
    const end = r[index];
    const subarray = nums.slice(start, end + 1);
    return isArithmetic(subarray);
  });

  function isArithmetic(subarray) {
    if (subarray.length < 2) return false;
    subarray.sort((a, b) => a - b);
    const diff = subarray[1] - subarray[0];
    for (let i = 2; i < subarray.length; i++) {
      if (subarray[i] - subarray[i - 1] !== diff) return false;
    }
    return true;
  }
};
