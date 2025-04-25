/**
 * 1653. Minimum Deletions to Make String Balanced
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 * Difficulty: Medium
 *
 * You are given a string s consisting only of characters 'a' and 'b'.
 *
 * You can delete any number of characters in s to make s balanced. s is balanced if there is
 * no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.
 *
 * Return the minimum number of deletions needed to make s balanced.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  let aCountRight = 0;
  for (const char of s) {
    if (char === 'a') aCountRight++;
  }

  let bCountLeft = 0;
  let result = aCountRight;

  for (const char of s) {
    if (char === 'a') aCountRight--;
    else bCountLeft++;
    result = Math.min(result, aCountRight + bCountLeft);
  }

  return result;
};
