/**
 * 2586. Count the Number of Vowel Strings in Range
 * https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array of string words and two integers left and right.
 *
 * A string is called a vowel string if it starts with a vowel character and ends with
 * a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
 *
 * Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].
 */

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i];
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
      result++;
    }
  }

  return result;
};
