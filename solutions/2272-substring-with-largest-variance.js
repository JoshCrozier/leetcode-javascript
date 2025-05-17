/**
 * 2272. Substring With Largest Variance
 * https://leetcode.com/problems/substring-with-largest-variance/
 * Difficulty: Hard
 *
 * The variance of a string is defined as the largest difference between the number of occurrences
 * of any 2 characters present in the string. Note the two characters may or may not be the same.
 *
 * Given a string s consisting of lowercase English letters only, return the largest variance
 * possible among all substrings of s.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
  const map = new Set(s);
  let result = 0;

  for (const charA of map) {
    for (const charB of map) {
      if (charA === charB) continue;

      let countA = 0;
      let countB = 0;
      let hasA = false;
      let hasB = false;

      for (const char of s) {
        if (char === charA) {
          countA++;
          hasA = true;
        }
        if (char === charB) {
          countB++;
          hasB = true;
        }

        if (hasA && hasB) {
          result = Math.max(result, Math.abs(countA - countB));
        }

        if (countA < countB) {
          countA = 0;
          countB = 0;
          hasA = false;
          hasB = false;
        }
      }

      countA = 0;
      countB = 0;
      hasA = false;
      hasB = false;

      for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === charA) {
          countA++;
          hasA = true;
        }
        if (s[i] === charB) {
          countB++;
          hasB = true;
        }

        if (hasA && hasB) {
          result = Math.max(result, Math.abs(countA - countB));
        }

        if (countA < countB) {
          countA = 0;
          countB = 0;
          hasA = false;
          hasB = false;
        }
      }
    }
  }

  return result;
};
