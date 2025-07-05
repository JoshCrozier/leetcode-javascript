/**
 * 1682. Longest Palindromic Subsequence II
 * https://leetcode.com/problems/longest-palindromic-subsequence-ii/
 * Difficulty: Medium
 *
 * A subsequence of a string s is considered a good palindromic subsequence if:
 * - It is a subsequence of s.
 * - It is a palindrome (has the same value if reversed).
 * - It has an even length.
 * - No two consecutive characters are equal, except the two middle ones.
 *
 * For example, if s = "abcabcabb", then "abba" is considered a good palindromic subsequence,
 * while "bcb" (not even length) and "bbbb" (has equal consecutive characters) are not.
 *
 * Given a string s, return the length of the longest good palindromic subsequence in s.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const stringLength = s.length;
  const alphabetSize = 26;
  const baseCharCode = 97;

  const memoTable = new Array(alphabetSize + 1);
  for (let i = 0; i <= alphabetSize; i++) {
    const matrix = memoTable[i] = new Array(stringLength);
    for (let j = 0; j < stringLength; j++) {
      matrix[j] = new Array(stringLength);
    }
  }

  return findLongestPalindrome(alphabetSize, 0, stringLength - 1);

  function findLongestPalindrome(previousChar, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex) return 0;

    const cachedResult = memoTable[previousChar][leftIndex][rightIndex];
    if (cachedResult !== undefined) return cachedResult;

    let maxLength = 0;
    const leftChar = s.charCodeAt(leftIndex) - baseCharCode;
    const rightChar = s.charCodeAt(rightIndex) - baseCharCode;

    if (leftChar === rightChar) {
      if (leftChar !== previousChar) {
        maxLength += 2;
      }
      maxLength += findLongestPalindrome(leftChar, leftIndex + 1, rightIndex - 1);
    } else {
      const skipLeftResult = findLongestPalindrome(previousChar, leftIndex + 1, rightIndex);
      const skipRightResult = findLongestPalindrome(previousChar, leftIndex, rightIndex - 1);
      maxLength += Math.max(skipLeftResult, skipRightResult);
    }

    return memoTable[previousChar][leftIndex][rightIndex] = maxLength;
  }
};
