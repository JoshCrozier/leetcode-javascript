/**
 * 845. Longest Mountain in Array
 * https://leetcode.com/problems/longest-mountain-in-array/
 * Difficulty: Medium
 *
 * You may recall that an array arr is a mountain array if and only if:
 * - arr.length >= 3
 * - There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
 *   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Given an integer array arr, return the length of the longest subarray, which is a
 * mountain. Return 0 if there is no mountain subarray.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  const n = arr.length;
  if (n < 3) return 0;

  let maxLength = 0;
  let i = 1;

  while (i < n - 1) {
    const isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }
    let leftBound = i - 1;
    while (leftBound > 0 && arr[leftBound - 1] < arr[leftBound]) {
      leftBound--;
    }
    let rightBound = i + 1;
    while (rightBound < n - 1 && arr[rightBound] > arr[rightBound + 1]) {
      rightBound++;
    }
    const mountainLength = rightBound - leftBound + 1;
    maxLength = Math.max(maxLength, mountainLength);
    i = rightBound + 1;
  }

  return maxLength;
};
