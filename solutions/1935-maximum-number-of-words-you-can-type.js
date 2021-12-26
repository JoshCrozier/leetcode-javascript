/**
 * 1935. Maximum Number of Words You Can Type
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/
 * Difficulty: Easy
 *
 * There is a malfunctioning keyboard where some letter keys do not work.
 * All other keys on the keyboard work properly.
 *
 * Given a string text of words separated by a single space (no leading or
 * trailing spaces) and a string brokenLetters of all distinct letter keys
 * that are broken, return the number of words in text you can fully type
 * using this keyboard.
 */

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  return text
    .split(/\s+/)
    .filter(word => !brokenLetters.split('').some(s => word.includes(s)))
    .length;
};
