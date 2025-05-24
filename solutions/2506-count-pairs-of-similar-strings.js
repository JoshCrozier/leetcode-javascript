/**
 * 2506. Count Pairs Of Similar Strings
 * https://leetcode.com/problems/count-pairs-of-similar-strings/
 * Difficulty: Easy
 *
 * You are given a 0-indexed string array words.
 *
 * Two strings are similar if they consist of the same characters.
 * - For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
 * - However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
 *
 * Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings
 * words[i] and words[j] are similar.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
  const map = new Map();
  let result = 0;

  for (const word of words) {
    const charSet = [...new Set(word.split(''))].sort().join('');
    map.set(charSet, (map.get(charSet) || 0) + 1);
  }

  for (const count of map.values()) {
    if (count > 1) {
      result += (count * (count - 1)) / 2;
    }
  }

  return result;
};
