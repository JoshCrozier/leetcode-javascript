/**
 * 2131. Longest Palindrome by Concatenating Two Letter Words
 * https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
 * Difficulty: Medium
 *
 * You are given an array of strings words. Each element of words consists of two lowercase
 * English letters.
 *
 * Create the longest possible palindrome by selecting some elements from words and concatenating
 * them in any order. Each element can be selected at most once.
 *
 * Return the length of the longest palindrome that you can create. If it is impossible to create
 * any palindrome, return 0.
 *
 * A palindrome is a string that reads the same forward and backward.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  const map = new Map();
  let length = 0;
  let hasCenter = false;

  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  for (const word of map.keys()) {
    const reverse = word[1] + word[0];

    if (word === reverse) {
      const count = map.get(word);
      length += Math.floor(count / 2) * 4;
      if (count % 2 === 1) hasCenter = true;
    } else if (map.has(reverse)) {
      const pairs = Math.min(map.get(word), map.get(reverse));
      length += pairs * 4;
      map.set(word, 0);
      map.set(reverse, 0);
    }
  }

  return hasCenter ? length + 2 : length;
};
