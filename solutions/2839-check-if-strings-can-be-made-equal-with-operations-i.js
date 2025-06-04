/**
 * 2839. Check if Strings Can be Made Equal With Operations I
 * https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/
 * Difficulty: Easy
 *
 * You are given two strings s1 and s2, both of length 4, consisting of lowercase English
 * letters.
 *
 * You can apply the following operation on any of the two strings any number of times:
 * - Choose any two indices i and j such that j - i = 2, then swap the two characters at those
 *   indices in the string.
 *
 * Return true if you can make the strings s1 and s2 equal, and false otherwise.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
  const firstPair = [s1[0], s1[2]].sort().join() === [s2[0], s2[2]].sort().join();
  const secondPair = [s1[1], s1[3]].sort().join() === [s2[1], s2[3]].sort().join();
  return firstPair && secondPair;
};
