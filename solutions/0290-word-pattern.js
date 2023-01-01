/**
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 * Difficulty: Easy
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between
 * a letter in pattern and a non-empty word in s.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(/\s+/);
  const map = new Map();

  return words.every((word, index) => {
    const offset = pattern.length === words.length ? index + 1 : words.length / pattern.length;
    const sequence = pattern.slice(index, offset);
    if (!map.has(sequence) && !Array.from(map.values()).includes(word)) {
      map.set(sequence, word);
    }
    return map.get(sequence) === word && pattern.length <= words.length;
  });
};
