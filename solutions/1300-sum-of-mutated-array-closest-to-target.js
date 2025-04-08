/**
 * 1300. Sum of Mutated Array Closest to Target
 * https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/
 * Difficulty: Medium
 *
 * Given an integer array arr and a target value target, return the integer value such that when
 * we change all the integers larger than value in the given array to be equal to value, the
 * sum of the array gets as close as possible (in absolute difference) to target.
 *
 * In case of a tie, return the minimum such integer.
 *
 * Notice that the answer is not neccesarilly a number from arr.
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
  arr.sort((a, b) => a - b);
  let prefixSum = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const remaining = length - i;
    const avg = (target - prefixSum) / remaining;

    if (avg <= arr[i]) {
      const floorVal = Math.floor(avg);
      const ceilVal = Math.ceil(avg);
      const floorSum = prefixSum + floorVal * remaining;
      const ceilSum = prefixSum + ceilVal * remaining;

      return Math.abs(floorSum - target) <= Math.abs(ceilSum - target) ? floorVal : ceilVal;
    }

    prefixSum += arr[i];
  }

  return arr[length - 1];
};
