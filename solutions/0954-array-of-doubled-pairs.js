/**
 * 954. Array of Doubled Pairs
 * https://leetcode.com/problems/array-of-doubled-pairs/
 * Difficulty: Medium
 *
 * Given an integer array of even length arr, return true if it is possible to reorder arr such
 * that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2, or false otherwise.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  const map = new Map();
  arr.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const num of arr) {
    if (map.get(num) === 0) continue;
    if (!map.has(2 * num) || map.get(2 * num) === 0) return false;

    map.set(num, map.get(num) - 1);
    map.set(2 * num, map.get(2 * num) - 1);
  }

  return true;
};
