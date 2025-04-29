/**
 * 1754. Largest Merge Of Two Strings
 * https://leetcode.com/problems/largest-merge-of-two-strings/
 * Difficulty: Medium
 *
 * You are given two strings word1 and word2. You want to construct a string merge in the
 * following way: while either word1 or word2 are non-empty, choose one of the following
 * options:
 * - If word1 is non-empty, append the first character in word1 to merge and delete it from word1.
 *   - For example, if word1 = "abc" and merge = "dv", then after choosing this operation,
 *     word1 = "bc" and merge = "dva".
 * - If word2 is non-empty, append the first character in word2 to merge and delete it from word2.
 *   - For example, if word2 = "abc" and merge = "", then after choosing this operation,
 *     word2 = "bc" and merge = "a".
 *
 * Return the lexicographically largest merge you can construct.
 *
 * A string a is lexicographically larger than a string b (of the same length) if in the first
 * position where a and b differ, a has a character strictly larger than the corresponding
 * character in b. For example, "abcd" is lexicographically larger than "abcc" because the
 * first position they differ is at the fourth character, and d is greater than c.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
  let merge = '';
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    if (word1.slice(i) >= word2.slice(j)) {
      merge += word1[i++];
    } else {
      merge += word2[j++];
    }
  }

  merge += word1.slice(i) + word2.slice(j);
  return merge;
};
