/**
 * 1433. Check If a String Can Break Another String
 * https://leetcode.com/problems/check-if-a-string-can-break-another-string/
 * Difficulty: Medium
 *
 * Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can
 * break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.
 *
 * A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all
 * i between 0 and n-1.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const sorted1 = s1.split('').sort();
  const sorted2 = s2.split('').sort();

  let canBreak1 = true;
  let canBreak2 = true;

  for (let i = 0; i < s1.length; i++) {
    if (sorted1[i] < sorted2[i]) {
      canBreak1 = false;
    }
    if (sorted2[i] < sorted1[i]) {
      canBreak2 = false;
    }
  }

  return canBreak1 || canBreak2;
};
