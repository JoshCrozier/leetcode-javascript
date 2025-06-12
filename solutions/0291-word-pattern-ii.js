/**
 * 291. Word Pattern II
 * https://leetcode.com/problems/word-pattern-ii/
 * Difficulty: Medium
 *
 * Given a pattern and a string s, return true if s matches the pattern.
 *
 * A string s matches a pattern if there is some bijective mapping of single characters to
 * non-empty strings such that if each character in pattern is replaced by the string it
 * maps to, then the resulting string is s. A bijective mapping means that no two characters
 * map to the same string, and no character maps to two different strings.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
  const charToWord = new Map();
  const usedWords = new Set();

  return backtrack(0, 0);

  function backtrack(patIndex, strIndex) {
    if (patIndex === pattern.length && strIndex === s.length) return true;
    if (patIndex >= pattern.length || strIndex >= s.length) return false;

    const char = pattern[patIndex];
    if (charToWord.has(char)) {
      const word = charToWord.get(char);
      if (!s.startsWith(word, strIndex)) return false;
      return backtrack(patIndex + 1, strIndex + word.length);
    }

    for (let i = strIndex + 1; i <= s.length; i++) {
      const word = s.slice(strIndex, i);
      if (usedWords.has(word)) continue;

      charToWord.set(char, word);
      usedWords.add(word);

      if (backtrack(patIndex + 1, strIndex + word.length)) return true;

      charToWord.delete(char);
      usedWords.delete(word);
    }

    return false;
  }
};
