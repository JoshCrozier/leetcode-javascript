/**
 * 2063. Vowels of All Substrings
 * https://leetcode.com/problems/vowels-of-all-substrings/
 * Difficulty: Medium
 *
 * Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in
 * every substring of word.
 *
 * A substring is a contiguous (non-empty) sequence of characters within a string.
 *
 * Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please
 * be careful during the calculations.
 */

/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let total = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i])) {
      total += (i + 1) * (word.length - i);
    }
  }

  return total;
};
