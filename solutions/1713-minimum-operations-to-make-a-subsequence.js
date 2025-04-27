/**
 * 1713. Minimum Operations to Make a Subsequence
 * https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/
 * Difficulty: Hard
 *
 * You are given an array target that consists of distinct integers and another integer array
 * arr that can have duplicates.
 *
 * In one operation, you can insert any integer at any position in arr. For example, if
 * arr = [1,4,1,2], you can add 3 in the middle and make it [1,4,3,1,2]. Note that you can
 * insert the integer at the very beginning or end of the array.
 *
 * Return the minimum number of operations needed to make target a subsequence of arr.
 *
 * A subsequence of an array is a new array generated from the original array by deleting some
 * elements (possibly none) without changing the remaining elements' relative order. For
 * example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements),
 * while [2,4,2] is not.
 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
  const valueToIndex = new Map(target.map((val, i) => [val, i]));
  const sequence = arr.filter(val => valueToIndex.has(val)).map(val => valueToIndex.get(val));

  const lis = [];
  for (const index of sequence) {
    const pos = binarySearch(lis, index);
    if (pos === lis.length) {
      lis.push(index);
    } else {
      lis[pos] = index;
    }
  }

  return target.length - lis.length;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
