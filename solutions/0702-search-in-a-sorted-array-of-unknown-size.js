/**
 * 702. Search in a Sorted Array of Unknown Size
 * https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
 * Difficulty: Medium
 *
 * This is an interactive problem.
 *
 * You have a sorted array of unique elements and an unknown size. You do not have an access
 * to the array but you can use the ArrayReader interface to access it. You can call
 * ArrayReader.get(i) that:
 * - returns the value at the ith index (0-indexed) of the secret array (i.e., secret[i]), or
 * - returns 231 - 1 if the i is out of the boundary of the array.
 *
 * You are also given an integer target.
 *
 * Return the index k of the hidden array where secret[k] == target or return -1 otherwise.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function(reader, target) {
  let left = 0;
  let right = 1;

  while (reader.get(right) < target) {
    left = right;
    right *= 2;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = reader.get(mid);

    if (value === target) {
      return mid;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
