/**
 * 2774. Array Upper Bound
 * https://leetcode.com/problems/array-upper-bound/
 * Difficulty: Easy
 *
 * Write code that enhances all arrays such that you can call the upperBound() method on any
 * array and it will return the last index of a given target number. nums is a sorted ascending
 * array of numbers that may contain duplicates. If the target number is not found in the array,
 * return -1.
 */

/**
 * @param {number} target
 * @return {number}
 */
Array.prototype.upperBound = function(target) {
  let left = 0;
  let right = this.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (this[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (this[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
