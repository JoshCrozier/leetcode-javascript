/**
 * 646. Maximum Length of Pair Chain
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 * Difficulty: Medium
 *
 * You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
 *
 * A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in
 * this fashion.
 *
 * Return the length longest chain which can be formed.
 *
 * You do not need to use up all the given intervals. You can select pairs in any order.
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  let pointer = -Infinity;
  let result = 0;

  for (const [start, end] of pairs) {
    if (start > pointer) {
      pointer = end;
      result++;
    }
  }

  return result;
};
