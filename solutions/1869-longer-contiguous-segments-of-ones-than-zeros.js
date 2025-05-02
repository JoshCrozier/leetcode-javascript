/**
 * 1869. Longer Contiguous Segments of Ones than Zeros
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
 * Difficulty: Easy
 *
 * Given a binary string s, return true if the longest contiguous segment of 1's is strictly
 * longer than the longest contiguous segment of 0's in s, or return false otherwise.
 * - For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the
 *   longest continuous segment of 0s has length 3.
 *
 * Note that if there are no 0's, then the longest continuous segment of 0's is considered to
 * have a length 0. The same applies if there is no 1's.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
  let maxOnes = 0;
  let maxZeros = 0;
  let currentOnes = 0;
  let currentZeros = 0;

  for (const char of s) {
    if (char === '1') {
      currentOnes++;
      currentZeros = 0;
      maxOnes = Math.max(maxOnes, currentOnes);
    } else {
      currentZeros++;
      currentOnes = 0;
      maxZeros = Math.max(maxZeros, currentZeros);
    }
  }

  return maxOnes > maxZeros;
};
