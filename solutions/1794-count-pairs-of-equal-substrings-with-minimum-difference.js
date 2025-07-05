/**
 * 1794. Count Pairs of Equal Substrings With Minimum Difference
 * https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/
 * Difficulty: Medium
 *
 * You are given two strings firstString and secondString that are 0-indexed and consist only
 * of lowercase English letters. Count the number of index quadruples (i,j,a,b) that satisfy
 * the following conditions:
 * - 0 <= i <= j < firstString.length
 * - 0 <= a <= b < secondString.length
 * - The substring of firstString that starts at the ith character and ends at the jth character
 *   (inclusive) is equal to the substring of secondString that starts at the ath character and
 *   ends at the bth character (inclusive).
 * - j - a is the minimum possible value among all quadruples that satisfy the previous conditions.
 *
 * Return the number of such quadruples.
 */

/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {number}
 */
var countQuadruples = function(firstString, secondString) {
  const firstPositions = new Array(26).fill(0);
  const secondPositions = new Array(26).fill(0);
  let minDifference = Infinity;
  let quadrupleCount = 0;

  for (let j = firstString.length - 1; j >= 0; j--) {
    firstPositions[firstString[j].charCodeAt(0) - 97] = j + 1;
  }

  for (let a = 0; a < secondString.length; a++) {
    secondPositions[secondString[a].charCodeAt(0) - 97] = a + 1;
  }

  for (let i = 0; i < 26; i++) {
    if (firstPositions[i] && secondPositions[i]) {
      const difference = firstPositions[i] - secondPositions[i];
      if (difference < minDifference) {
        minDifference = difference;
        quadrupleCount = 0;
      }
      if (difference === minDifference) {
        quadrupleCount++;
      }
    }
  }

  return quadrupleCount;
};
