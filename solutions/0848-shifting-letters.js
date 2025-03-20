/**
 * 848. Shifting Letters
 * https://leetcode.com/problems/shifting-letters/
 * Difficulty: Medium
 *
 * You are given a string s of lowercase English letters and an integer array shifts of the
 * same length.
 *
 * Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that
 * 'z' becomes 'a').
 *
 * For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
 *
 * Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.
 *
 * Return the final string after all such shifts to s are applied.
 */

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const cumulativeShifts = new Array(s.length).fill(0);

  cumulativeShifts[s.length - 1] = shifts[s.length - 1] % 26;
  for (let i = s.length - 2; i >= 0; i--) {
    cumulativeShifts[i] = (cumulativeShifts[i + 1] + shifts[i]) % 26;
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    const shiftedCode = ((charCode - 97 + cumulativeShifts[i]) % 26) + 97;
    result += String.fromCharCode(shiftedCode);
  }

  return result;
};
