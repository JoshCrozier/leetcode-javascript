/**
 * 898. Bitwise ORs of Subarrays
 * https://leetcode.com/problems/bitwise-ors-of-subarrays/
 * Difficulty: Medium
 *
 * Given an integer array arr, return the number of distinct bitwise ORs of all the non-empty
 * subarrays of arr.
 *
 * The bitwise OR of a subarray is the bitwise OR of each integer in the subarray. The bitwise
 * OR of a subarray of one integer is that integer.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  const results = new Set();
  let previous = new Set();

  for (const num of arr) {
    const current = new Set([num]);
    for (const prev of previous) {
      current.add(prev | num);
    }
    previous = current;
    previous.forEach(val => results.add(val));
  }

  return results.size;
};
