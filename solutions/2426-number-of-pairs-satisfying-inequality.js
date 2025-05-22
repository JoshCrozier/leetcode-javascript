/**
 * 2426. Number of Pairs Satisfying Inequality
 * https://leetcode.com/problems/number-of-pairs-satisfying-inequality/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums1 and nums2, each of size n, and an
 * integer diff. Find the number of pairs (i, j) such that:
 * - 0 <= i < j <= n - 1 and
 * - nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff.
 *
 * Return the number of pairs that satisfy the conditions.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, diff) {
  const n = nums1.length;
  const differences = new Array(n);
  for (let i = 0; i < n; i++) {
    differences[i] = nums1[i] - nums2[i];
  }
  let result = 0;
  mergeSort(0, n);
  return result;

  function mergeSort(left, right) {
    if (right - left <= 1) return;

    const mid = Math.floor((left + right) / 2);
    mergeSort(left, mid);
    mergeSort(mid, right);

    let i = left;
    let j = mid;
    while (i < mid && j < right) {
      if (differences[i] <= differences[j] + diff) {
        result += right - j;
        i++;
      } else {
        j++;
      }
    }

    const sorted = new Array(right - left);
    let k = 0;
    i = left;
    j = mid;
    while (i < mid && j < right) {
      if (differences[i] <= differences[j]) {
        sorted[k++] = differences[i++];
      } else {
        sorted[k++] = differences[j++];
      }
    }
    while (i < mid) sorted[k++] = differences[i++];
    while (j < right) sorted[k++] = differences[j++];

    for (let p = 0; p < sorted.length; p++) {
      differences[left + p] = sorted[p];
    }
  }
};
