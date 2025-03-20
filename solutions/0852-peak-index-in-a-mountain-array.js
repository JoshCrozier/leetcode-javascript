/**
 * 852. Peak Index in a Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * Difficulty: Medium
 *
 * You are given an integer mountain array arr of length n where the values increase to a peak
 * element and then decrease.
 *
 * Return the index of the peak element.
 *
 * Your task is to solve it in O(log(n)) time complexity.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] > arr[middle + 1]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};
