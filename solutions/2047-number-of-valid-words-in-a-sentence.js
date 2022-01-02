/**
 * 2047. Number of Valid Words in a Sentence
 * https://leetcode.com/problems/number-of-valid-words-in-a-sentence/
 * Difficulty: Easy
 *
 * A sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'),
 * hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only.
 * Each sentence can be broken down into one or more tokens separated by one or
 * more spaces ' '.
 *
 * A token is a valid word if all three of the following are true:
 * - It only contains lowercase letters, hyphens, and/or punctuation (no digits).
 * - There is at most one hyphen '-'. If present, it must be surrounded by lowercase
 *   characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
 * - There is at most one punctuation mark. If present, it must be at the end of
 *   the token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
 *
 * Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".
 *
 * Given a string sentence, return the number of valid words in sentence.
 */

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
  return sentence.trim().split(/\s+/).reduce((total, str) => {
    return total + (/^(?:([a-z]+\-?[a-z]+)|([a-z+]))?[!.,]?$/.test(str) ? 1 : 0);
  }, 0);
};
