/**
 * 2080. Range Frequency Queries
 * https://leetcode.com/problems/range-frequency-queries/
 * Difficulty: Medium
 *
 * Design a data structure to find the frequency of a given value in a given subarray.
 *
 * The frequency of a value in a subarray is the number of occurrences of that value in
 * the subarray.
 *
 * Implement the RangeFreqQuery class:
 * - RangeFreqQuery(int[] arr) Constructs an instance of the class with the given 0-indexed
 *   integer array arr.
 * - int query(int left, int right, int value) Returns the frequency of value in the subarray
 *   arr[left...right].
 * - A subarray is a contiguous sequence of elements within an array. arr[left...right] denotes
 *   the subarray that contains the elements of nums between indices left and right (inclusive).
 */

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  this.frequencyMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!this.frequencyMap.has(arr[i])) {
      this.frequencyMap.set(arr[i], []);
    }
    this.frequencyMap.get(arr[i]).push(i);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  if (!this.frequencyMap.has(value)) return 0;

  const indices = this.frequencyMap.get(value);
  let start = 0;
  let end = indices.length - 1;
  let leftBound = -1;
  let rightBound = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (indices[mid] >= left) {
      leftBound = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = indices.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (indices[mid] <= right) {
      rightBound = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return leftBound === -1 || rightBound === -1 ? 0 : rightBound - leftBound + 1;
};
