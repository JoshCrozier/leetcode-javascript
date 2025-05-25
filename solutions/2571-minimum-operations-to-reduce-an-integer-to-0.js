/**
 * 2571. Minimum Operations to Reduce an Integer to 0
 * https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/
 * Difficulty: Medium
 *
 * You are given a positive integer n, you can do the following operation any number of times:
 * - Add or subtract a power of 2 from n.
 *
 * Return the minimum number of operations to make n equal to 0.
 *
 * A number x is power of 2 if x == 2i where i >= 0.
 */

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  let result = 0;

  while (n > 0) {
    if ((n & 1) === 0) {
      n >>= 1;
    } else if ((n & 3) === 3) {
      n += 1;
      result++;
    } else {
      n -= 1;
      result++;
    }
  }

  return result;
};
