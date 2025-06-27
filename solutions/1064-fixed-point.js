/**
 * 1064. Fixed Point
 * https://leetcode.com/problems/fixed-point/
 * Difficulty: Easy
 *
 * Given an array of distinct integers arr, where arr is sorted in ascending order, return
 * the smallest index i that satisfies arr[i] == i. If there is no such index, return -1.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === mid) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
