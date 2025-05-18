/**
 * 2309. Greatest English Letter in Upper and Lower Case
 * https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
 * Difficulty: Easy
 *
 * Given a string of English letters s, return the greatest English letter which occurs as both
 * a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such
 * letter exists, return an empty string.
 *
 * An English letter b is greater than another letter a if b appears after a in the English
 * alphabet.
 */

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const lowerSet = new Set();
  const upperSet = new Set();

  for (const char of s) {
    if (char >= 'a' && char <= 'z') {
      lowerSet.add(char);
    } else {
      upperSet.add(char.toLowerCase());
    }
  }

  let maxLetter = '';
  for (const char of lowerSet) {
    if (upperSet.has(char) && char > maxLetter) {
      maxLetter = char;
    }
  }

  return maxLetter.toUpperCase();
};
