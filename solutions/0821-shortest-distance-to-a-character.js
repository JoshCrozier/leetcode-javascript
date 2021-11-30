/**
 * 821. Shortest Distance to a Character
 * https://leetcode.com/problems/shortest-distance-to-a-character/
 * Difficulty: Easy
 *
 * Given a string s and a character c that occurs in s, return an array of
 * integers answer where answer.length == s.length and answer[i] is the
 * distance from index i to the closest occurrence of character c in s.
 *
 * The distance between two indices i and j is abs(i - j), where abs is the
 * absolute value function.
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const result = [];
  const pointers = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) pointers.push(i);
  }

  for (let i = 0, j = 0; i < s.length; i++) {
    if (i > pointers[j + 1] && pointers.length - 2 > j) {
      j++;
    }

    const offset = pointers.length > 1
      ? Math.min(Math.abs(pointers[j] - i), Math.abs(pointers[j + 1] - i))
      : Math.abs(pointers[j] - i);

    result.push(offset);
  }

  return result;
};
