/**
 * 288. Unique Word Abbreviation
 * https://leetcode.com/problems/unique-word-abbreviation/
 * Difficulty: Medium
 *
 * The abbreviation of a word is a concatenation of its first letter, the number of characters
 * between the first and last letter, and its last letter. If a word has only two characters,
 * then it is an abbreviation of itself.
 *
 * For example:
 * - dog --> d1g because there is one letter between the first letter 'd' and the last letter 'g'.
 * - internationalization --> i18n because there are 18 letters between the first letter 'i' and
 *   the last letter 'n'.
 * - it --> it because any word with only two characters is an abbreviation of itself.
 *
 * Implement the ValidWordAbbr class:
 * - ValidWordAbbr(String[] dictionary) Initializes the object with a dictionary of words.
 * - boolean isUnique(string word) Returns true if either of the following conditions are met
 *   (otherwise returns false):
 *   - There is no word in dictionary whose abbreviation is equal to word's abbreviation.
 *   - For any word in dictionary whose abbreviation is equal to word's abbreviation, that word
 *     and word are the same.
 */

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  this.abbrMap = new Map();

  for (const word of dictionary) {
    const abbr = this.getAbbreviation(word);
    if (!this.abbrMap.has(abbr)) {
      this.abbrMap.set(abbr, new Set());
    }
    this.abbrMap.get(abbr).add(word);
  }
};

/**
 * @param {string} word
 * @return {string}
 */
ValidWordAbbr.prototype.getAbbreviation = function(word) {
  if (word.length <= 2) return word;
  return word[0] + (word.length - 2) + word[word.length - 1];
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  const abbr = this.getAbbreviation(word);
  const words = this.abbrMap.get(abbr);
  return !words || (words.size === 1 && words.has(word));
};
