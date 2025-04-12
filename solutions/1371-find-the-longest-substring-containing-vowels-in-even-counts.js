/**
 * 1371. Find the Longest Substring Containing Vowels in Even Counts
 * https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 * Difficulty: Medium
 *
 * Given the string s, return the size of the longest substring containing each vowel an even number
 * of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.
 */

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  const vowelMap = new Map([['a', 0], ['e', 1], ['i', 2], ['o', 3], ['u', 4]]);
  const stateToIndex = new Map([[0, -1]]);
  let state = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowelMap.has(s[i])) {
      state ^= 1 << vowelMap.get(s[i]);
    }
    if (stateToIndex.has(state)) {
      result = Math.max(result, i - stateToIndex.get(state));
    } else {
      stateToIndex.set(state, i);
    }
  }

  return result;
};
