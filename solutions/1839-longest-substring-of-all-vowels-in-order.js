/**
 * 1839. Longest Substring Of All Vowels in Order
 * https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/
 * Difficulty: Medium
 *
 * A string is considered beautiful if it satisfies the following conditions:
 * - Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
 * - The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's
 *   before 'i's, etc.).
 *
 * For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu",
 * and "aaaeeeooo" are not beautiful.
 *
 * Given a string word consisting of English vowels, return the length of the longest beautiful
 * substring of word. If no such substring exists, return 0.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
  let result = 0;
  let start = 0;
  let vowelCount = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] < word[i - 1]) {
      start = i;
      vowelCount = 1;
    } else if (word[i] > word[i - 1]) {
      vowelCount++;
    }

    if (vowelCount === 5) {
      result = Math.max(result, i - start + 1);
    }
  }

  return result;
};
