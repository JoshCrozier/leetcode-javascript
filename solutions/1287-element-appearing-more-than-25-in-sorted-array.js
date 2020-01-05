/**
 * 1287. Element Appearing More Than 25% In Sorted Array
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 * Difficulty: Easy
 *
 * Given an integer array sorted in non-decreasing order,
 * there is exactly one integer in the array that occurs more than 25% of the time.
 *
 * Return that integer.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const limit = arr.length * 0.25;
  const offset = limit % 1 === 0 ? limit : Math.ceil(limit) - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + offset]) {
      return arr[i];
    }
  }
};