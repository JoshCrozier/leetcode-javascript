/**
 * 3035. Maximum Palindromes After Operations
 * https://leetcode.com/problems/maximum-palindromes-after-operations/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string array words having length n and containing 0-indexed strings.
 *
 * You are allowed to perform the following operation any number of times (including zero):
 * - Choose integers i, j, x, and y such that 0 <= i, j < n, 0 <= x < words[i].length,
 *   0 <= y < words[j].length, and swap the characters words[i][x] and words[j][y].
 *
 * Return an integer denoting the maximum number of palindromes words can contain, after performing
 * some operations.
 *
 * Note: i and j may be equal during an operation.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxPalindromesAfterOperations = function(words) {
  const charCount = new Array(26).fill(0);
  let pairCount = 0;
  let result = 0;

  for (const word of words) {
    for (const char of word) {
      charCount[char.charCodeAt(0) - 97]++;
    }
  }

  for (const count of charCount) {
    pairCount += Math.floor(count / 2);
  }

  const lengths = words.map(word => word.length).sort((a, b) => a - b);
  for (const length of lengths) {
    if (pairCount >= Math.floor(length / 2)) {
      pairCount -= Math.floor(length / 2);
      result++;
    }
  }

  return result;
};
