/**
 * 3104. Find Longest Self-Contained Substring
 * https://leetcode.com/problems/find-longest-self-contained-substring/
 * Difficulty: Hard
 *
 * Given a string s, your task is to find the length of the longest self-contained substring
 * of s.
 *
 * A substring t of a string s is called self-contained if t != s and for every character in
 * t, it doesn't exist in the rest of s.
 *
 * Return the length of the longest self-contained substring of s if it exists, otherwise,
 * return -1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxSubstringLength = function(s) {
  const firstOccurrences = new Map();
  const lastOccurrences = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!firstOccurrences.has(char)) {
      firstOccurrences.set(char, i);
      lastOccurrences.set(char, i);
    } else {
      lastOccurrences.set(char, i);
    }
  }

  let result = -1;

  for (const [startChar, startIndex] of firstOccurrences) {
    const currentStart = startIndex;
    let currentEnd = lastOccurrences.get(startChar);

    for (let j = currentStart; j < s.length; j++) {
      const currentChar = s[j];

      if (firstOccurrences.get(currentChar) < currentStart) {
        break;
      }

      currentEnd = Math.max(currentEnd, lastOccurrences.get(currentChar));

      if (currentEnd === j && currentEnd - currentStart + 1 !== s.length) {
        result = Math.max(result, currentEnd - currentStart + 1);
      }
    }
  }

  return result;
};
