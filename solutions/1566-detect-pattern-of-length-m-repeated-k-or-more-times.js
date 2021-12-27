/**
 * 1566. Detect Pattern of Length M Repeated K or More Times
 * https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
 * Difficulty: Easy
 *
 * Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.
 *
 * A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple
 * times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.
 *
 * Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.
 */

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  for (let i = 0; i < arr.length - m + 1; i++) {
    const pattern = new Array(k).fill(arr.slice(i, i + m).join()).join();
    if (arr.join().includes(pattern)) {
      return true;
    }
  }
  return false;
};
