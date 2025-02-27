/**
 * 873. Length of Longest Fibonacci Subsequence
 * https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
 * Difficulty: Medium
 *
 * A sequence x1, x2, ..., xn is Fibonacci-like if:
 * - n >= 3
 * - xi + xi+1 == xi+2 for all i + 2 <= n
 *
 * Given a strictly increasing array arr of positive integers forming a sequence, return the length
 * of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.
 *
 * A subsequence is derived from another sequence arr by deleting any number of elements (including
 * none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is
 * a subsequence of [3, 4, 5, 6, 7, 8].
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  const set = new Set(arr);
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let [x, y, count] = [arr[i], arr[j], 2];

      while (set.has(x + y)) {
        const next = x + y;
        x = y;
        y = next;
        count++;
      }

      max = Math.max(max, count);
    }
  }

  return max >= 3 ? max : 0;
};
