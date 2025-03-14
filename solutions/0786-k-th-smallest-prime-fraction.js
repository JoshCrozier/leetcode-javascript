/**
 * 786. K-th Smallest Prime Fraction
 * https://leetcode.com/problems/k-th-smallest-prime-fraction/
 * Difficulty: Medium
 *
 * You are given a sorted integer array arr containing 1 and prime numbers, where all the integers
 * of arr are unique. You are also given an integer k.
 *
 * For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
 *
 * Return the kth smallest fraction considered. Return your answer as an array of integers of size
 * 2, where answer[0] == arr[i] and answer[1] == arr[j].
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  const n = arr.length;
  let left = 0;
  let right = 1;

  while (left < right) {
    const mid = (left + right) / 2;
    let count = 0;
    let maxFraction = [0, 1];
    let j = 1;

    for (let i = 0; i < n - 1; i++) {
      while (j < n && arr[i] > mid * arr[j]) {
        j++;
      }

      count += n - j;

      if (j < n && arr[i] * maxFraction[1] > maxFraction[0] * arr[j]) {
        maxFraction = [arr[i], arr[j]];
      }
    }

    if (count === k) {
      return maxFraction;
    } else if (count < k) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return [];
};
