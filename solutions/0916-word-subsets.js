/**
 * 916. Word Subsets
 * https://leetcode.com/problems/word-subsets/
 * Difficulty: Medium
 *
 * You are given two string arrays words1 and words2.
 *
 * A string b is a subset of string a if every letter in b occurs in a including multiplicity.
 *
 * For example, "wrr" is a subset of "warrior" but is not a subset of "world".
 *
 * A string a from words1 is universal if for every string b in words2, b is a subset of a.
 *
 * Return an array of all the universal strings in words1. You may return the answer in any order.
 */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
  const count = (string, char) => string.split(char).length - 1;
  const subset = Array.from(words2.reduce((map, b) => {
    b.split('').forEach(char => {
      map.set(char, (map.get(char) || 0) > count(b, char) ? map.get(char) : count(b, char));
    });
    return map;
  }, new Map()));
  return words1.filter(a => subset.every(match => count(a, match[0]) >= match[1]));
};
