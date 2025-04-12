/**
 * 1370. Increasing Decreasing String
 * https://leetcode.com/problems/increasing-decreasing-string/
 * Difficulty: Easy
 *
 * You are given a string s. Reorder the string using the following algorithm:
 * 1. Remove the smallest character from s and append it to the result.
 * 2. Remove the smallest character from s that is greater than the last appended character,
 *   and append it to the result.
 * 3. Repeat step 2 until no more characters can be removed.
 * 4. Remove the largest character from s and append it to the result.
 * 5. Remove the largest character from s that is smaller than the last appended character,
 *   and append it to the result.
 * 6. Repeat step 5 until no more characters can be removed.
 * 7. Repeat steps 1 through 6 until all characters from s have been removed.
 *
 * If the smallest or largest character appears more than once, you may choose any occurrence to
 * append to the result.
 *
 * Return the resulting string after reordering s using this algorithm.
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const charCounts = new Array(26).fill(0);
  for (const char of s) {
    charCounts[char.charCodeAt(0) - 97]++;
  }

  let result = '';
  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (charCounts[i] > 0) {
        result += String.fromCharCode(i + 97);
        charCounts[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (charCounts[i] > 0) {
        result += String.fromCharCode(i + 97);
        charCounts[i]--;
      }
    }
  }

  return result;
};
