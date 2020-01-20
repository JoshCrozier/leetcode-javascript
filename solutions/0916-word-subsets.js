/**
 * 916. Word Subsets
 * https://leetcode.com/problems/word-subsets/
 * Difficulty: Medium
 *
 * We are given two arrays A and B of words.  Each word is a string of lowercase letters.
 *
 * Now, say that word b is a subset of word a if every letter in b occurs in a, including
 * multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".
 *
 * Now say a word a from A is universal if for every b in B, b is a subset of a.
 *
 * Return a list of all universal words in A.  You can return the words in any order.
 */

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  const count = (string, char) => string.split(char).length - 1;
  const subset = Array.from(B.reduce((map, b) => {
    b.split('').forEach(char => {
      map.set(char, (map.get(char) || 0) > count(b, char) ? map.get(char) : count(b, char));
    });
    return map;
  }, new Map()));
  return A.filter(a => subset.every(match => count(a, match[0]) >= match[1]));
};
