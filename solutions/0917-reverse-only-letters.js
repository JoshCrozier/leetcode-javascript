/**
 * 917. Reverse Only Letters
 * https://leetcode.com/problems/reverse-only-letters/
 * Difficulty: Easy
 *
 * Given a string s, reverse the string according to the following rules:
 * - All the characters that are not English letters remain in the same position.
 * - All the English letters (lowercase or uppercase) should be reversed.
 *
 * Return s after reversing it.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const chars = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z]/.test(chars[left])) {
      left++;
    }
    while (left < right && !/[a-zA-Z]/.test(chars[right])) {
      right--;
    }
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join('');
};
