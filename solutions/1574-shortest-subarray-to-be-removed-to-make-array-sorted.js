/**
 * 1574. Shortest Subarray to be Removed to Make Array Sorted
 * https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/
 * Difficulty: Medium
 *
 * Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining
 * elements in arr are non-decreasing.
 *
 * Return the length of the shortest subarray to remove.
 *
 * A subarray is a contiguous subsequence of the array.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
  const n = arr.length;
  let left = 0;

  while (left < n - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === n - 1) return 0;

  let right = n - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  let minLength = Math.min(n - left - 1, right);

  for (let i = 0, j = right; i <= left && j < n; i++) {
    while (j < n && arr[i] > arr[j]) {
      j++;
    }
    minLength = Math.min(minLength, j - i - 1);
  }

  return minLength;
};
