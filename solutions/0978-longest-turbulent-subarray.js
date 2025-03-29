/**
 * 978. Longest Turbulent Subarray
 * https://leetcode.com/problems/longest-turbulent-subarray/
 * Difficulty: Medium
 *
 * Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
 *
 * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements
 * in the subarray.
 *
 * More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent
 * if and only if:
 * - For i <= k < j:
 *   - arr[k] > arr[k + 1] when k is odd, and
 *   - arr[k] < arr[k + 1] when k is even.
 * - Or, for i <= k < j:
 *   - arr[k] > arr[k + 1] when k is even, and
 *   - arr[k] < arr[k + 1] when k is odd.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let result = 1;
  let inc = 1;
  let dec = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      inc = dec + 1;
      dec = 1;
    } else if (arr[i] < arr[i - 1]) {
      dec = inc + 1;
      inc = 1;
    } else {
      inc = 1;
      dec = 1;
    }
    result = Math.max(result, inc, dec);
  }

  return result;
};
