/**
 * 1422. Maximum Score After Splitting a String
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 * Difficulty: Easy
 *
 * Given a string s of zeros and ones, return the maximum score after splitting the string into
 * two non-empty substrings (i.e. left substring and right substring).
 *
 * The score after splitting a string is the number of zeros in the left substring plus the number
 * of ones in the right substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let rightOnes = s.split('').reduce((count, char) => count + (char === '1'), 0);
  let leftZeros = 0;
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    leftZeros += s[i] === '0';
    rightOnes -= s[i] === '1';
    result = Math.max(result, leftZeros + rightOnes);
  }

  return result;
};
