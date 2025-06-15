/**
 * 408. Valid Word Abbreviation
 * https://leetcode.com/problems/valid-word-abbreviation/
 * Difficulty: Easy
 *
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings
 * with their lengths. The lengths should not have leading zeros.
 *
 * For example, a string such as "substitution" could be abbreviated as (but not limited to):
 * - "s10n" ("s ubstitutio n")
 * - "sub4u4" ("sub stit u tion")
 * - "12" ("substitution")
 * - "su3i1u2on" ("su bst i t u ti on")
 * - "substitution" (no substrings replaced)
 *
 * The following are not valid abbreviations:
 * - "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 * - "s010n" (has leading zeros)
 * - "s0ubstitution" (replaces an empty substring)
 *
 * Given a string word and an abbreviation abbr, return whether the string matches the given
 * abbreviation.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  let wordIndex = 0;
  let abbrIndex = 0;

  while (wordIndex < word.length && abbrIndex < abbr.length) {
    if (word[wordIndex] === abbr[abbrIndex]) {
      wordIndex++;
      abbrIndex++;
      continue;
    }

    if (abbr[abbrIndex] < '0' || abbr[abbrIndex] > '9') return false;
    if (abbr[abbrIndex] === '0') return false;

    let num = 0;
    while (abbrIndex < abbr.length && /[0-9]/.test(abbr[abbrIndex])) {
      num = num * 10 + Number(abbr[abbrIndex]);
      abbrIndex++;
    }
    wordIndex += num;
  }

  return wordIndex === word.length && abbrIndex === abbr.length;
};
