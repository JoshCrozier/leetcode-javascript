/**
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * Difficulty: Medium
 *
 * Given an array of integers arr and two integers k and threshold, return the number of sub-arrays
 * of size k and average greater than or equal to threshold.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let result = 0;
  let windowSum = 0;
  const minSum = k * threshold;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  if (windowSum >= minSum) result++;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum >= minSum) result++;
  }

  return result;
};
