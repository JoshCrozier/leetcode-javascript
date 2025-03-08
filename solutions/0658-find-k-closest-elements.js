/**
 * 658. Find K Closest Elements
 * https://leetcode.com/problems/find-k-closest-elements/
 * Difficulty: Medium
 *
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to x
 * in the array. The result should also be sorted in ascending order.
 *
 * An integer a is closer to x than an integer b if:
 * - |a - x| < |b - x|, or
 * - |a - x| == |b - x| and a < b
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    const x1 = arr[middle];
    const x2 = arr[middle + k];

    if (x - x1 > x2 - x) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return arr.slice(left, left + k);
};
