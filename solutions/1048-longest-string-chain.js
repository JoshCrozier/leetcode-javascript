/**
 * 1048. Longest String Chain
 * https://leetcode.com/problems/longest-string-chain/
 * Difficulty: Medium
 *
 * You are given an array of words where each word consists of lowercase English letters.
 *
 * wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in
 * wordA without changing the order of the other characters to make it equal to wordB.
 *
 * For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
 *
 * A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is
 * a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is
 * trivially a word chain with k == 1.
 *
 * Return the length of the longest possible word chain with words chosen from the given list
 * of words.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  const map = new Map();
  let result = 1;

  words.sort((a, b) => a.length - b.length);

  for (const word of words) {
    let currentLength = 1;
    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      if (map.has(prev)) {
        currentLength = Math.max(currentLength, map.get(prev) + 1);
      }
    }
    map.set(word, currentLength);
    result = Math.max(result, currentLength);
  }

  return result;
};
