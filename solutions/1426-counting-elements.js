/**
 * 1426. Counting Elements
 * https://leetcode.com/problems/counting-elements/
 * Difficulty: Easy
 *
 * Given an integer array arr, count how many elements x there are, such that x + 1 is also
 * in arr. If there are duplicates in arr, count them separately.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  const set = new Set(arr);
  return arr.filter(num => set.has(num + 1)).length;
};
