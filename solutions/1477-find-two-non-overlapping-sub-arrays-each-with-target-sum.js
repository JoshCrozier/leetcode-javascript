/**
 * 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
 * https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/
 * Difficulty: Medium
 *
 * You are given an array of integers arr and an integer target.
 *
 * You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There
 * can be multiple answers so you have to find an answer where the sum of the lengths of the
 * two sub-arrays is minimum.
 *
 * Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you
 * cannot find such two sub-arrays.
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
  const prefixSums = new Map([[0, -1]]);
  let currentSum = 0;
  let minLength = Infinity;
  const minLengths = new Array(arr.length).fill(Infinity);
  let result = Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (prefixSums.has(currentSum - target)) {
      const start = prefixSums.get(currentSum - target);
      const length = i - start;
      minLength = Math.min(minLength, length);
      if (start >= 0 && minLengths[start] !== Infinity) {
        result = Math.min(result, length + minLengths[start]);
      }
    }
    minLengths[i] = minLength;
    prefixSums.set(currentSum, i);
  }

  return result === Infinity ? -1 : result;
};
