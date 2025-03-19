/**
 * 833. Find And Replace in String
 * https://leetcode.com/problems/find-and-replace-in-string/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s that you must perform k replacement operations on.
 * The replacement operations are given as three 0-indexed parallel arrays, indices, sources,
 * and targets, all of length k.
 *
 * To complete the ith replacement operation:
 * 1. Check if the substring sources[i] occurs at index indices[i] in the original string s.
 * 2. If it does not occur, do nothing.
 * 3. Otherwise if it does occur, replace that substring with targets[i].
 *
 * For example, if s = "abcd", indices[i] = 0, sources[i] = "ab", and targets[i] = "eee", then
 * the result of this replacement will be "eeecd".
 *
 * All replacement operations must occur simultaneously, meaning the replacement operations should
 * not affect the indexing of each other. The testcases will be generated such that the replacements
 * will not overlap.
 *
 * - For example, a testcase with s = "abc", indices = [0, 1], and sources = ["ab","bc"] will not be
 *   generated because the "ab" and "bc" replacements overlap.
 *
 * Return the resulting string after performing all replacement operations on s.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  const replacements = [];

  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    const source = sources[i];
    const target = targets[i];

    if (s.substring(index, index + source.length) === source) {
      replacements.push({ index, source, target });
    }
  }

  replacements.sort((a, b) => b.index - a.index);

  let result = s;
  for (const { index, source, target } of replacements) {
    result = result.substring(0, index) + target + result.substring(index + source.length);
  }

  return result;
};
