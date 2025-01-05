/**
 * 1657. Determine if Two Strings Are Close
 * https://leetcode.com/problems/determine-if-two-strings-are-close/
 * Difficulty: Medium
 *
 * Two strings are considered close if you can attain one from the other using the following
 * operations:
 *
 * - Operation 1: Swap any two existing characters.
 *   For example, abcde -> aecdb
 * - Operation 2: Transform every occurrence of one existing character into another existing
 *   character, and do the same with the other character.
 *   For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 *
 * You can use the operations on either string as many times as necessary.
 *
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false
 * otherwise.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  const map1 = helper(word1);
  const map2 = helper(word2);

  for (let i = 0; i < map1.length; i++) {
    if ((map1[i] === 0 || map2[i] === 0) && map1[i] !== map2[i]) {
      return false;
    }
  }

  [map1, map2].forEach(m => m.sort((a, b) => b - a));

  return map1.join('') === map2.join('');
};

function helper(input) {
  const map = Array(26).fill(0);
  for (let i = 0; i < input.length; i++) {
    map[input.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  return map;
}
