/**
 * 1394. Find Lucky Integer in an Array
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * Difficulty: Easy
 *
 * Given an array of integers arr, a lucky integer is an integer that has a frequency
 * in the array equal to its value.
 *
 * Return the largest lucky integer in the array. If there is no lucky integer return -1.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const frequencyMap = new Map();
  let result = -1;

  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  for (const [num, count] of frequencyMap) {
    if (num === count && num > result) {
      result = num;
    }
  }

  return result;
};
