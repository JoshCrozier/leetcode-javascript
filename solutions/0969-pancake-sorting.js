/**
 * 969. Pancake Sorting
 * https://leetcode.com/problems/pancake-sorting/
 * Difficulty: Medium
 *
 * Given an array of integers arr, sort the array by performing a series of pancake flips.
 *
 * In one pancake flip we do the following steps:
 * - Choose an integer k where 1 <= k <= arr.length.
 * - Reverse the sub-array arr[0...k-1] (0-indexed).
 *
 * For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, we reverse
 * the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3.
 *
 * Return an array of the k-values corresponding to a sequence of pancake flips that sort arr.
 * Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  const result = [];
  let end = arr.length;

  while (end > 1) {
    const maxIndex = arr.indexOf(end);

    if (maxIndex !== end - 1) {
      if (maxIndex !== 0) {
        result.push(maxIndex + 1);
        reverse(arr, maxIndex);
      }
      result.push(end);
      reverse(arr, end - 1);
    }
    end--;
  }

  return result;
};

function reverse(arr, k) {
  let left = 0;
  while (left < k) {
    [arr[left], arr[k]] = [arr[k], arr[left]];
    left++;
    k--;
  }
}
