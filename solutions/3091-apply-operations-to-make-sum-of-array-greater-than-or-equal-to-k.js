/**
 * 3091. Apply Operations to Make Sum of Array Greater Than or Equal to k
 * https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/
 * Difficulty: Medium
 *
 * You are given a positive integer k. Initially, you have an array nums = [1].
 *
 * You can perform any of the following operations on the array any number of times (possibly zero):
 * - Choose any element in the array and increase its value by 1.
 * - Duplicate any element in the array and add it to the end of the array.
 *
 * Return the minimum number of operations required to make the sum of elements of the final array
 * greater than or equal to k.
 */

/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function(k) {
  if (k === 1) return 0;

  let result = Infinity;
  for (let increments = 0; increments <= Math.ceil(Math.sqrt(k)); increments++) {
    const value = 1 + increments;
    const duplicates = Math.ceil(k / value) - 1;
    if (duplicates >= 0) {
      result = Math.min(result, increments + duplicates);
    }
  }

  return result;
};
