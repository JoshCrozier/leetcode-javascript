/**
 * 1858. Longest Word With All Prefixes
 * https://leetcode.com/problems/longest-word-with-all-prefixes/
 * Difficulty: Medium
 *
 * Given an array of strings words, find the longest string in words such that every
 * prefix of it is also in words.
 * - For example, let words = ["a", "app", "ap"]. The string "app" has prefixes "ap" and "a",
 *   all of which are in words.
 *
 * Return the string described above. If there is more than one string with the same length,
 * return the lexicographically smallest one, and if no string exists, return "".
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const set = new Set(words);
  let result = '';

  for (const word of words) {
    let hasAllPrefixes = true;

    for (let i = 1; i < word.length; i++) {
      if (!set.has(word.slice(0, i))) {
        hasAllPrefixes = false;
        break;
      }
    }

    if (hasAllPrefixes) {
      if (word.length > result.length || (word.length === result.length && word < result)) {
        result = word;
      }
    }
  }

  return result;
};
