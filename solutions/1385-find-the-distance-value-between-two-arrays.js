/**
 * 1385. Find the Distance Value Between Two Arrays
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 * Difficulty: Easy
 *
 * Given two integer arrays arr1 and arr2, and the integer d, return the distance value between
 * the two arrays.
 *
 * The distance value is defined as the number of elements arr1[i] such that there is not any
 * element arr2[j] where |arr1[i]-arr2[j]| <= d.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let result = 0;

  for (const num1 of arr1) {
    let isValid = true;
    for (const num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        isValid = false;
        break;
      }
    }
    if (isValid) result++;
  }

  return result;
};
