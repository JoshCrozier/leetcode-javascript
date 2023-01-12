/**
 * 30. Substring with Concatenation of All Words
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * Difficulty: Hard
 *
 * You are given a string s and an array of strings words. All the strings of words are of the same
 * length.
 *
 * A concatenated substring in s is a substring that contains all the strings of any permutation of
 * words concatenated.
 *
 * - For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd",
 * and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is
 * not the concatenation of any permutation of words.
 *
 * Return the starting indices of all the concatenated substrings in s. You can return the answer in
 * any order.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words || words.length === 0) {
    return [];
  }

  const result = [];
  const map = {};
  const count = words[0].length;

  words.forEach(word => map[word] = ~~map[word] + 1);

  for (let i = 0; i < s.length - words.length * count + 1; i++) {
    const temp = Object.assign({}, map);

    for (let j = i; j < i + words.length * count; j += count) {
      const key = s.slice(j, j + count);
      if (!temp[key]) {
        break;
      } else if (--temp[key] === 0) {
        delete temp[key];
      }
    }

    if (Object.keys(temp).length === 0) {
      result.push(i);
    }
  }

  return result;
};
