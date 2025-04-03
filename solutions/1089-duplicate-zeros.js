/**
 * 1089. Duplicate Zeros
 * https://leetcode.com/problems/duplicate-zeros/
 * Difficulty: Easy
 *
 * Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the
 * remaining elements to the right.
 *
 * Note that elements beyond the length of the original array are not written. Do the above
 * modifications to the input array in place and do not return anything.
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let zerosToAdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zerosToAdd++;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      zerosToAdd--;
      if (i + zerosToAdd + 1 < arr.length) {
        arr[i + zerosToAdd + 1] = 0;
      }
    }
    if (i + zerosToAdd < arr.length) {
      arr[i + zerosToAdd] = arr[i];
    }
  }
};
