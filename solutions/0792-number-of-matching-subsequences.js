/**
 * 792. Number of Matching Subsequences
 * https://leetcode.com/problems/number-of-matching-subsequences/
 * Difficulty: Medium
 *
 * Given a string s and an array of strings words, return the number of words[i] that is a
 * subsequence of s.
 *
 * A subsequence of a string is a new string generated from the original string with some
 * characters (can be none) deleted without changing the relative order of the remaining
 * characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  const charMap = new Map();

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i);
    charMap.set(char, []);
  }

  for (const word of words) {
    const firstChar = word[0];
    const wordInfo = { word, index: 0 };
    charMap.get(firstChar).push(wordInfo);
  }

  let count = 0;

  for (const char of s) {
    const bucket = charMap.get(char);
    charMap.set(char, []);

    for (const wordInfo of bucket) {
      wordInfo.index++;

      if (wordInfo.index === wordInfo.word.length) {
        count++;
      } else {
        const nextChar = wordInfo.word[wordInfo.index];
        charMap.get(nextChar).push(wordInfo);
      }
    }
  }

  return count;
};
