/**
 * 3136. Valid Word
 * https://leetcode.com/problems/valid-word/
 * Difficulty: Easy
 *
 * A word is considered valid if:
 * - It contains a minimum of 3 characters.
 * - It contains only digits (0-9), and English letters (uppercase and lowercase).
 * - It includes at least one vowel.
 * - It includes at least one consonant.
 *
 * You are given a string word.
 *
 * Return true if word is valid, otherwise, return false.
 *
 * Notes:
 * - 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
 * - A consonant is an English letter that is not a vowel.
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  if (word.length < 3) return false;

  const vowels = new Set('aeiouAEIOU');
  const special = new Set('@#$');
  const digits = new Set('0123456789');
  const wordSet = new Set(word);

  if (hasIntersection(wordSet, special)) return false;
  if (!hasIntersection(wordSet, vowels)) return false;

  const result = new Set([...wordSet].filter(char => {
    return !vowels.has(char) && !digits.has(char);
  }));

  return result.size > 0;

  function hasIntersection(set1, set2) {
    for (const item of set1) {
      if (set2.has(item)) return true;
    }
    return false;
  }
};
