/**
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 * Difficulty: Easy
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in
 * pattern and a non-empty word in s. Specifically:
 * - Each letter in pattern maps to exactly one unique word in s.
 * - Each unique word in s maps to exactly one letter in pattern.
 * - No two letters map to the same word, and no two words map to the same letter.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  const map = new Map();
  return pattern.split('').every((char, i) =>
    map.has(char)
      ? map.get(char) === words[i]
      : !([...map.values()].includes(words[i])) && map.set(char, words[i])
  );
};
