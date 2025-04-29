/**
 * 1750. Minimum Length of String After Deleting Similar Ends
 * https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
 * Difficulty: Medium
 *
 * Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the
 * following algorithm on the string any number of times:
 * 1. Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
 * 2. Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
 * 3. The prefix and the suffix should not intersect at any index.
 * 4. The characters from the prefix and suffix must be the same.
 * 5. Delete both the prefix and the suffix.
 *
 * Return the minimum length of s after performing the above operation any number of times
 * (possibly zero times).
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const char = s[left];
    while (left <= right && s[left] === char) left++;
    while (left <= right && s[right] === char) right--;
  }

  return Math.max(0, right - left + 1);
};
