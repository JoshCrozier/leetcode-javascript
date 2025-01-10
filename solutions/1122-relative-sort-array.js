/**
 * 1122. Relative Sort Array
 * https://leetcode.com/problems/relative-sort-array/
 * Difficulty: Easy
 *
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all
 * elements in arr2 are also in arr1.
 *
 * Sort the elements of arr1 such that the relative ordering of items in arr1
 * are the same as in arr2. Elements that do not appear in arr2 should be
 * placed at the end of arr1 in ascending order.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map = new Map(arr2.map((v, i) => [v, i]));
  return arr1.sort((a, b) => (map.get(a) ?? arr2.length + a) - (map.get(b) ?? arr2.length + b));
};
