/**
 * 2399. Check Distances Between Same Letters
 * https://leetcode.com/problems/check-distances-between-same-letters/
 * Difficulty: Easy
 *
 * You are given a 0-indexed string s consisting of only lowercase English letters, where each
 * letter in s appears exactly twice. You are also given a 0-indexed integer array distance of
 * length 26.
 *
 * Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1,
 * 'c' -> 2, ... , 'z' -> 25).
 *
 * In a well-spaced string, the number of letters between the two occurrences of the ith letter
 * is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.
 *
 * Return true if s is a well-spaced string, otherwise return false.
 */

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      map.get(char).push(i);
    } else {
      map.set(char, [i]);
    }
  }

  for (const [char, positions] of map) {
    const letterIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (positions[1] - positions[0] - 1 !== distance[letterIndex]) {
      return false;
    }
  }

  return true;
};
