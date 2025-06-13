/**
 * 320. Generalized Abbreviation
 * https://leetcode.com/problems/generalized-abbreviation/
 * Difficulty: Medium
 *
 * A word's generalized abbreviation can be constructed by taking any number of non-overlapping
 * and non-adjacent substrings and replacing them with their respective lengths.
 * - For example, "abcde" can be abbreviated into:
 *   - "a3e" ("bcd" turned into "3")
 *   - "1bcd1" ("a" and "e" both turned into "1")
 *   - "5" ("abcde" turned into "5")
 *   - "abcde" (no substrings replaced)
 * - However, these abbreviations are invalid:
 *   - "23" ("ab" turned into "2" and "cde" turned into "3") is invalid as the substrings
 *     chosen are adjacent.
 *   - "22de" ("ab" turned into "2" and "bc" turned into "2") is invalid as the substring
 *     chosen overlap.
 *
 * Given a string word, return a list of all the possible generalized abbreviations of word.
 * Return the answer in any order.
 */

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  const result = [];
  backtrack('', 0, 0);
  return result;

  function backtrack(current, pos, count) {
    if (pos === word.length) {
      result.push(current + (count > 0 ? count : ''));
      return;
    }

    backtrack(current + (count > 0 ? count : '') + word[pos], pos + 1, 0);
    backtrack(current, pos + 1, count + 1);
  }
};
