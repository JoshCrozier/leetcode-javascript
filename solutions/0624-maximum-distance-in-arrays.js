/**
 * 624. Maximum Distance in Arrays
 * https://leetcode.com/problems/maximum-distance-in-arrays/
 * Difficulty: Medium
 *
 * You are given m arrays, where each array is sorted in ascending order.
 *
 * You can pick up two integers from two different arrays (each array picks one) and calculate
 * the distance. We define the distance between two integers a and b to be their absolute
 * difference |a - b|.
 *
 * Return the maximum distance.
 */

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let result = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < arrays.length; i++) {
    const newMin = arrays[i][0];
    const newMax = arrays[i][arrays[i].length - 1];
    result = Math.max(result, Math.abs(newMax - min), Math.abs(max - newMin));
    min = Math.min(min, newMin);
    max = Math.max(max, newMax);
  }

  return result;
};
