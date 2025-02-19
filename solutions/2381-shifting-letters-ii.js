/**
 * 2381. Shifting Letters II
 * https://leetcode.com/problems/shifting-letters-ii/
 * Difficulty: Medium
 *
 * You are given a string s of lowercase English letters and a 2D integer array shifts where
 * shifts[i] = [starti, endi, directioni]. For every i, shift the characters in s from the
 * index starti to the index endi (inclusive) forward if directioni = 1, or shift the characters
 * backward if directioni = 0.
 *
 * Shifting a character forward means replacing it with the next letter in the alphabet (wrapping
 * around so that 'z' becomes 'a'). Similarly, shifting a character backward means replacing it
 * with the previous letter in the alphabet (wrapping around so that 'a' becomes 'z').
 *
 * Return the final string after all such shifts to s are applied.
 */

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const compare = new Array(s.length).fill(0);
  for (const [start, end, direction] of shifts) {
    compare[start] += direction === 1 ? 1 : -1;
    if (end + 1 < s.length) {
      compare[end + 1] += direction === 1 ? -1 : 1;
    }
  }
  let result = '';
  for (let i = 0, count = 0; i < s.length; i++) {
    count = (count + compare[i]) % 26;
    count = count < 0 ? count + 26 : count;
    result += String.fromCharCode((s.charCodeAt(i) - 97 + count) % 26 + 97);
  }
  return result;
};
