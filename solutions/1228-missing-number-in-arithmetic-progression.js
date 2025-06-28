/**
 * 1228. Missing Number In Arithmetic Progression
 * https://leetcode.com/problems/missing-number-in-arithmetic-progression/
 * Difficulty: Easy
 *
 * In some array arr, the values were in arithmetic progression: the values
 * arr[i + 1] - arr[i] are all equal for every 0 <= i < arr.length - 1.
 *
 * A value from arr was removed that was not the first or last value in the array.
 *
 * Given arr, return the removed value.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
  const n = arr.length;
  const totalDiff = arr[n - 1] - arr[0];
  const expectedDiff = totalDiff / n;

  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] !== expectedDiff) {
      return arr[i - 1] + expectedDiff;
    }
  }

  return arr[0] + expectedDiff;
};
