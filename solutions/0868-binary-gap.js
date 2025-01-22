/**
 * 868. Binary Gap
 * https://leetcode.com/problems/binary-gap/
 * Difficulty: Easy
 *
 * Given a positive integer n, find and return the longest distance between any two adjacent 1's
 * in the binary representation of n. If there are no two adjacent 1's, return 0.
 *
 * Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance
 * between two 1's is the absolute difference between their bit positions. For example, the two
 * 1's in "1001" have a distance of 3.
 */

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  return Math.max(0, ...n.toString(2).split('1').slice(1, -1).map(s => s.length + 1));
};
