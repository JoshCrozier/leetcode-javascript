/**
 * 1358. Number of Substrings Containing All Three Characters
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 * Difficulty: Medium
 *
 * Given a string s consisting only of characters a, b and c.
 *
 * Return the number of substrings containing at least one occurrence of all these
 * characters a, b and c.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const count = [0, 0, 0];
  let result = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right].charCodeAt(0) - 97]++;

    while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
      result += s.length - right;
      count[s[left].charCodeAt(0) - 97]--;
      left++;
    }
  }

  return result;
};
