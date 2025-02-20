/**
 * 1980. Find Unique Binary String
 * https://leetcode.com/problems/find-unique-binary-string/
 * Difficulty: Medium
 *
 * Given an array of strings nums containing n unique binary strings each of length n,
 * return a binary string of length n that does not appear in nums. If there are multiple
 * answers, you may return any of them.
 */

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  return nums.map((n, i) => n[i] === '0' ? '1' : '0').join('');
};
