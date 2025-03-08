/**
 * 659. Split Array into Consecutive Subsequences
 * https://leetcode.com/problems/split-array-into-consecutive-subsequences/
 * Difficulty: Medium
 *
 * You are given an integer array nums that is sorted in non-decreasing order.
 *
 * Determine if it is possible to split nums into one or more subsequences such that both of the
 * following conditions are true:
 * - Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more
 *   than the previous integer).
 * - All subsequences have a length of 3 or more.
 *
 * Return true if you can split nums according to the above conditions, or false otherwise.
 *
 * A subsequence of an array is a new array that is formed from the original array by deleting some
 * (can be none) of the elements without disturbing the relative positions of the remaining
 * elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const map = new Map();
  const map2 = new Map();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (const n of nums) {
    if (map.get(n) === 0) continue;

    if ((map2.get(n) || 0) > 0) {
      map2.set(n, map2.get(n) - 1);
      map.set(n, map.get(n) - 1);
      map2.set(n + 1, (map2.get(n + 1) || 0) + 1);
    } else if ((map.get(n) || 0) > 0 && (map.get(n + 1) || 0) > 0 && (map.get(n + 2) || 0) > 0) {
      map.set(n, map.get(n) - 1);
      map.set(n + 1, map.get(n + 1) - 1);
      map.set(n + 2, map.get(n + 2) - 1);
      map2.set(n + 3, (map2.get(n + 3) || 0) + 1);
    } else {
      return false;
    }
  }

  return true;
};
