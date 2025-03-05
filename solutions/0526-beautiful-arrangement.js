/**
 * 526. Beautiful Arrangement
 * https://leetcode.com/problems/beautiful-arrangement/
 * Difficulty: Medium
 *
 * Suppose you have n integers labeled 1 through n. A permutation of those n integers perm
 * (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either
 * of the following is true:
 * - perm[i] is divisible by i.
 * - i is divisible by perm[i].
 *
 * Given an integer n, return the number of the beautiful arrangements that you can construct.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  let count = 0;
  backtrack(1, 0);
  return count;

  function backtrack(offset, used) {
    if (offset > n) {
      count++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!(used & (1 << i)) && (i % offset === 0 || offset % i === 0)) {
        backtrack(offset + 1, used | (1 << i));
      }
    }
  }
};
