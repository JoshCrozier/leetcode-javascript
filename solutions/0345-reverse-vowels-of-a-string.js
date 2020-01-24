/**
 * 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * Difficulty: Easy
 *
 * Write a function that takes a string as input
 * and reverse only the vowels of a string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = s.match(/[aeiou]/ig);
  return s.replace(/[aeiou]/ig, () => vowels.pop());
};
