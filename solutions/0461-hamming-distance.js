/**
 * 461. Hamming Distance
 * https://leetcode.com/problems/hamming-distance/
 * Difficulty: Easy
 *
 * The Hamming distance between two integers is the number of positions at which the corresponding
 * bits are different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0+/g, '').length;
};
