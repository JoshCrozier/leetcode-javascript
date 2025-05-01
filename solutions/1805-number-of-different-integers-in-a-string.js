/**
 * 1805. Number of Different Integers in a String
 * https://leetcode.com/problems/number-of-different-integers-in-a-string/
 * Difficulty: Easy
 *
 * You are given a string word that consists of digits and lowercase English letters.
 *
 * You will replace every non-digit character with a space. For example, "a123bc34d8ef34"
 * will become " 123  34 8  34". Notice that you are left with some integers that are
 * separated by at least one space: "123", "34", "8", and "34".
 *
 * Return the number of different integers after performing the replacement operations on word.
 *
 * Two integers are considered different if their decimal representations without any leading
 * zeros are different.
 */

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const uniqueIntegers = new Set();
  let currentNum = '';

  for (const char of word) {
    if (/\d/.test(char)) {
      currentNum += char;
    } else if (currentNum) {
      uniqueIntegers.add(String(BigInt(currentNum)));
      currentNum = '';
    }
  }

  if (currentNum) {
    uniqueIntegers.add(String(BigInt(currentNum)));
  }

  return uniqueIntegers.size;
};
