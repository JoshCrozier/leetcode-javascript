/**
 * 1191. K-Concatenation Maximum Sum
 * https://leetcode.com/problems/k-concatenation-maximum-sum/
 * Difficulty: Medium
 *
 * Given an integer array arr and an integer k, modify the array by repeating it k times.
 *
 * For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].
 *
 * Return the maximum sub-array sum in the modified array. Note that the length of the sub-array
 * can be 0 and its sum in that case is 0.
 *
 * As the answer can be very large, return the answer modulo 109 + 7.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  const MOD = 1e9 + 7;
  const arraySum = arr.reduce((sum, num) => sum + num, 0);
  const maxSingle = helper(arr);

  if (k === 1) return maxSingle;

  const doubleArray = [...arr, ...arr];
  const maxDouble = helper(doubleArray);

  if (arraySum > 0) {
    return Number((BigInt(maxDouble) + BigInt(arraySum) * BigInt(k - 2)) % BigInt(MOD));
  }

  return maxDouble;
};

function helper(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (const num of arr) {
    maxEndingHere = Math.max(0, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
