/**
 * 1207. Unique Number of Occurrences
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * Difficulty: Easy
 *
 * Given an array of integers arr, write a
 * function that returns true if and only
 * if the number of occurrences of each
 * value in the array is unique.
 */

/**
 * @param {number[]} numbers
 * @return {boolean}
 */
var uniqueOccurrences = function(numbers) {
  const map = new Map();
  numbers.forEach(n => map.set(n, map.has(n) ? map.get(n) + 1 : 1));
  const occurrences = Array.from(map.values());
  return new Set(occurrences).size === occurrences.length
};
