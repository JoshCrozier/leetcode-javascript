/**
 * 1520. Maximum Number of Non-Overlapping Substrings
 * https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/
 * Difficulty: Hard
 *
 * Given a string s of lowercase letters, you need to find the maximum number of non-empty
 * substrings of s that meet the following conditions:
 * 1. The substrings do not overlap, that is for any two substrings s[i..j] and s[x..y],
 *    either j < x or i > y is true.
 * 2. A substring that contains a certain character c must also contain all occurrences of c.
 *
 * Find the maximum number of substrings that meet the above conditions. If there are multiple
 * solutions with the same number of substrings, return the one with minimum total length. It
 * can be shown that there exists a unique solution of minimum total length.
 *
 * Notice that you can return the substrings in any order.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
  const charRange = new Array(26).fill().map(() => [Infinity, -Infinity]);

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 97;
    charRange[charIndex][0] = Math.min(charRange[charIndex][0], i);
    charRange[charIndex][1] = Math.max(charRange[charIndex][1], i);
  }

  const intervals = [];
  for (let c = 0; c < 26; c++) {
    if (charRange[c][0] === Infinity) continue;
    const start = charRange[c][0];
    let end = charRange[c][1];
    let valid = true;

    for (let i = start; i <= end; i++) {
      const charIndex = s.charCodeAt(i) - 97;
      if (charRange[charIndex][0] < start) {
        valid = false;
        break;
      }
      end = Math.max(end, charRange[charIndex][1]);
    }

    if (valid) {
      intervals.push([start, end]);
    }
  }

  intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  const result = [];
  let lastEnd = -1;

  for (const [start, end] of intervals) {
    if (start > lastEnd) {
      result.push(s.slice(start, end + 1));
      lastEnd = end;
    }
  }

  return result;
};
