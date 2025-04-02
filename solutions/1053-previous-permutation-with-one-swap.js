/**
 * 1053. Previous Permutation With One Swap
 * https://leetcode.com/problems/previous-permutation-with-one-swap/
 * Difficulty: Medium
 *
 * Given an array of positive integers arr (not necessarily distinct), return the lexicographically
 * largest permutation that is smaller than arr, that can be made with exactly one swap. If it
 * cannot be done, then return the same array.
 *
 * Note that a swap exchanges the positions of two numbers arr[i] and arr[j]
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
  const result = [...arr];
  let swapIndex = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      swapIndex = i;
      break;
    }
  }

  if (swapIndex === -1) return arr;

  let maxLessIndex = swapIndex + 1;
  for (let j = swapIndex + 2; j < arr.length; j++) {
    if (arr[j] < arr[swapIndex] && arr[j] > arr[maxLessIndex]) {
      maxLessIndex = j;
    }
  }

  [result[swapIndex], result[maxLessIndex]] = [result[maxLessIndex], result[swapIndex]];

  return result;
};
