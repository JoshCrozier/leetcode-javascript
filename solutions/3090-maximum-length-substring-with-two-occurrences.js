/**
 * 3090. Maximum Length Substring With Two Occurrences
 * https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/
 * Difficulty: Easy
 *
 * Given a string s, return the maximum length of a substring such that it contains at most
 * two occurrences of each character.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
  let result = 0;
  const map = new Map();

  for (let left = 0, right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.get(s[right]) > 2) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
