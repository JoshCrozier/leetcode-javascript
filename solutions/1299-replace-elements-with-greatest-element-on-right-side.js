/**
 * 1299. Replace Elements with Greatest Element on Right Side
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * Difficulty: Easy
 *
 * Given an array arr, replace every element in that array with the greatest element among the
 * elements to its right, and replace the last element with -1.
 *
 * After doing so, return the array.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let maxRight = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, current);
  }
  return arr;
};
