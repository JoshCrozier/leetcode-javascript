/**
 * 2023. Number of Pairs of Strings With Concatenation Equal to Target
 * https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
 * Difficulty: Medium
 *
 * Given an array of digit strings nums and a digit string target, return the number of pairs of
 * indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.
 */

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  const map = new Map();
  let result = 0;

  for (const num of nums) {
    if (target.startsWith(num)) {
      const suffix = target.slice(num.length);
      result += map.get(suffix) || 0;
    }
    if (target.endsWith(num)) {
      const prefix = target.slice(0, target.length - num.length);
      result += map.get(prefix) || 0;
    }
    map.set(num, (map.get(num) || 0) + 1);
  }

  return result;
};
