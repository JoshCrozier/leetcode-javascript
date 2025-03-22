/**
 * 899. Orderly Queue
 * https://leetcode.com/problems/orderly-queue/
 * Difficulty: Hard
 *
 * You are given a string s and an integer k. You can choose one of the first k letters of s
 * and append it at the end of the string.
 *
 * Return the lexicographically smallest string you could have after applying the mentioned
 * step any number of moves.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
  if (k === 1) {
    let smallest = s;
    for (let i = 0; i < s.length; i++) {
      const rotated = s.slice(i) + s.slice(0, i);
      if (rotated < smallest) smallest = rotated;
    }
    return smallest;
  }
  return [...s].sort().join('');
};
