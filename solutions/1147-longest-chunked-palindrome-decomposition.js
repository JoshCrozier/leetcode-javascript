/**
 * 1147. Longest Chunked Palindrome Decomposition
 * https://leetcode.com/problems/longest-chunked-palindrome-decomposition/
 * Difficulty: Hard
 *
 * You are given a string text. You should split it to k substrings (subtext1,
 * subtext2, ..., subtextk) such that:
 * - subtexti is a non-empty string.
 * - The concatenation of all the substrings is equal to text (i.e., subtext1 + subtext2
 *   + ... + subtextk == text).
 * - subtexti == subtextk - i + 1 for all valid values of i (i.e., 1 <= i <= k).
 *
 * Return the largest possible value of k.
 */

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  return decompose(0, text.length - 1);

  function decompose(start, end) {
    if (start > end) return 0;
    if (start === end) return 1;

    const left = start;
    const right = end;
    let chunkSize = 0;

    while (left + chunkSize < right - chunkSize) {
      chunkSize++;
      if (text.slice(left, left + chunkSize) === text.slice(right - chunkSize + 1, right + 1)) {
        return 2 + decompose(left + chunkSize, right - chunkSize);
      }
    }

    return 1;
  }
};
