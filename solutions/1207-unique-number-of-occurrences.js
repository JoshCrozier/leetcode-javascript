/**
 * 1207. Unique Number of Occurrences
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * Difficulty: Easy
 *
 * Given an array of integers arr, return true if the number of occurrences of each
 * value in the array is unique or false otherwise.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map();
  arr.forEach(n => map.set(n, map.has(n) ? map.get(n) + 1 : 1));
  const occurrences = Array.from(map.values());
  return new Set(occurrences).size === occurrences.length;
};
