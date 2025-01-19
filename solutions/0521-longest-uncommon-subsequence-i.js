/**
 * 521. Longest Uncommon Subsequence I
 * https://leetcode.com/problems/longest-uncommon-subsequence-i/
 * Difficulty: Easy
 *
 * Given two strings a and b, return the length of the longest uncommon subsequence between
 * a and b. If no such uncommon subsequence exists, return -1.
 *
 * An uncommon subsequence between two strings is a string that is a subsequence of exactly
 * one of them.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};
