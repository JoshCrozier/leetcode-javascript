/**
 * 2062. Count Vowel Substrings of a String
 * https://leetcode.com/problems/count-vowel-substrings-of-a-string/
 * Difficulty: Easy
 *
 * A substring is a contiguous (non-empty) sequence of characters within a string.
 *
 * A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u')
 * and has all five vowels present in it.
 *
 * Given a string word, return the number of vowel substrings in word.
 */

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let total = 0;

  for (let start = 0; start < word.length; start++) {
    const vowelCount = new Map();
    for (let end = start; end < word.length && vowels.has(word[end]); end++) {
      vowelCount.set(word[end], (vowelCount.get(word[end]) || 0) + 1);
      if (vowelCount.size === 5) {
        total++;
      }
    }
  }

  return total;
};
