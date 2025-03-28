/**
 * 953. Verifying an Alien Dictionary
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * Difficulty: Easy
 *
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly
 * in a different order. The order of the alphabet is some permutation of lowercase letters.
 *
 * Given a sequence of words written in the alien language, and the order of the alphabet,
 * return true if and only if the given words are sorted lexicographically in this alien language.
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const map = new Map(order.split('').map((char, index) => [char, index]));

  for (let i = 0; i < words.length - 1; i++) {
    if (!helper(words[i], words[i + 1])) return false;
  }

  return true;

  function helper(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
      if (i >= word2.length) return false;
      const char1 = map.get(word1[i]);
      const char2 = map.get(word2[i]);
      if (char1 < char2) return true;
      if (char1 > char2) return false;
    }
    return true;
  }
};
