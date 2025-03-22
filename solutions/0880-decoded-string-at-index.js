/**
 * 880. Decoded String at Index
 * https://leetcode.com/problems/decoded-string-at-index/
 * Difficulty: Medium
 *
 * You are given an encoded string s. To decode the string to a tape, the encoded string is read
 * one character at a time and the following steps are taken:
 * - If the character read is a letter, that letter is written onto the tape.
 * - If the character read is a digit d, the entire current tape is repeatedly written d - 1
 *   more times in total.
 *
 * Given an integer k, return the kth letter (1-indexed) in the decoded string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
  let tapeLength = 0;
  let i = 0;

  while (tapeLength < k) {
    if (isLetter(s[i])) {
      tapeLength++;
    } else {
      tapeLength *= parseInt(s[i]);
    }
    i++;
  }

  while (i--) {
    if (isLetter(s[i])) {
      if (tapeLength === k) return s[i];
      tapeLength--;
    } else {
      tapeLength = Math.floor(tapeLength / parseInt(s[i]));
      k = k % tapeLength || tapeLength;
    }
  }
};

function isLetter(char) {
  return /[a-z]/.test(char);
}
