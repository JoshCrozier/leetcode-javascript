/**
 * 941. Valid Mountain Array
 * https://leetcode.com/problems/valid-mountain-array/
 * Difficulty: Easy
 *
 * Given an array of integers arr, return true if and only if it is a valid mountain array.
 *
 * Recall that arr is a mountain array if and only if:
 * - arr.length >= 3
 * - There exists some i with 0 < i < arr.length - 1 such that:
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) return false;

  const peakIndex = arr.indexOf(Math.max(...arr));
  if (peakIndex === 0 || peakIndex === arr.length - 1) return false;

  for (let i = 1; i < peakIndex; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }

  for (let i = peakIndex + 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) return false;
  }

  return true;
};
