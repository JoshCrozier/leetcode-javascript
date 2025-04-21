/**
 * 1593. Split a String Into the Max Number of Unique Substrings
 * https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/
 * Difficulty: Medium
 *
 * Given a string s, return the maximum number of unique substrings that the given string can
 * be split into.
 *
 * You can split string s into any list of non-empty substrings, where the concatenation of
 * the substrings forms the original string. However, you must split the substrings such that
 * all of them are unique.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  return backtrack(0, new Set());

  function backtrack(start, seen) {
    if (start === s.length) return seen.size;

    let maxSplits = 0;
    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (!seen.has(substring)) {
        seen.add(substring);
        maxSplits = Math.max(maxSplits, backtrack(end, seen));
        seen.delete(substring);
      }
    }

    return maxSplits;
  }
};
