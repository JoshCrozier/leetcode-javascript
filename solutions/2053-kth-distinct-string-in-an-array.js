/**
 * 2053. Kth Distinct String in an Array
 * https://leetcode.com/problems/kth-distinct-string-in-an-array/
 * Difficulty: Medium
 *
 * A distinct string is a string that is present only once in an array.
 *
 * Given an array of strings arr, and an integer k, return the kth distinct
 * string present in arr. If there are fewer than k distinct strings, return
 * an empty string "".
 *
 * Note that the strings are considered in the order in which they appear in
 * the array.
 */

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const map = new Map();
  arr.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  const sorted = [...map].sort(([,a], [,b]) => a - b);
  const [kth, count] = sorted[k - 1] || [];

  return count === 1 ? kth : '';
};
