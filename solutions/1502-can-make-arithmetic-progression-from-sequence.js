/**
 * 1502. Can Make Arithmetic Progression From Sequence
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 * Difficulty: Easy
 *
 * A sequence of numbers is called an arithmetic progression if the difference
 * between any two consecutive elements is the same.
 *
 * Given an array of numbers arr, return true if the array can be rearranged to
 * form an arithmetic progression. Otherwise, return false.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 2, diff = arr[1] - arr[0]; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }

  return true;
};
