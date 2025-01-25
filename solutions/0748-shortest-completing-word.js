/**
 * 748. Shortest Completing Word
 * https://leetcode.com/problems/shortest-completing-word/
 * Difficulty: Easy
 *
 * Given a string licensePlate and an array of strings words, find the shortest completing
 * word in words.
 *
 * A completing word is a word that contains all the letters in licensePlate. Ignore numbers
 * and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more
 * than once in licensePlate, then it must appear in the word the same number of times or more.
 *
 * For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case),
 * and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
 *
 * Return the shortest completing word in words. It is guaranteed an answer exists. If there
 * are multiple shortest completing words, return the first one that occurs in words.
 */

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  const license = licensePlate.toLowerCase().replace(/[\d\s]+/g, '');
  const sortedWords = [...words].sort((a, b) => a.length - b.length);

  for (const word of sortedWords) {
    let updatedLicense = license;

    for (let i = 0; i < word.length; i++) {
      updatedLicense = updatedLicense.replace(word[i], '');
      if (!updatedLicense) {
        return word;
      }
    }
  }
};
