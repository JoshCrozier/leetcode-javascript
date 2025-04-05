/**
 * 1160. Find Words That Can Be Formed by Characters
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 * Difficulty: Easy
 *
 * You are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters from chars (each character can only be
 * used once).
 *
 * Return the sum of lengths of all good strings in words.
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, availableChars) {
  const charFrequency = new Map();
  for (const char of availableChars) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  let result = 0;
  for (const word of words) {
    const tempFrequency = new Map(charFrequency);
    let isValid = true;

    for (const char of word) {
      if (!tempFrequency.has(char) || tempFrequency.get(char) === 0) {
        isValid = false;
        break;
      }
      tempFrequency.set(char, tempFrequency.get(char) - 1);
    }

    if (isValid) result += word.length;
  }

  return result;
};
