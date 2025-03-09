/**
 * 2559. Count Vowel Strings in Ranges
 * https://leetcode.com/problems/count-vowel-strings-in-ranges/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of strings words and a 2D array of integers queries.
 *
 * Each query queries[i] = [li, ri] asks us to find the number of strings present at the
 * indices ranging from li to ri (both inclusive) of words that start and end with a vowel.
 *
 * Return an array ans of size queries.length, where ans[i] is the answer to the ith query.
 *
 * Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.
 */

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const prefix = [0];
  for (let i = 0; i < words.length; i++) {
    prefix[i + 1] = prefix[i] + (vowels.has(words[i][0]) && vowels.has(words[i].at(-1)));
  }
  return queries.map(([l, r]) => prefix[r + 1] - prefix[l]);
};
