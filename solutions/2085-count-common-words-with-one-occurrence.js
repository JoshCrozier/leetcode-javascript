/**
 * 2085. Count Common Words With One Occurrence
 * https://leetcode.com/problems/count-common-words-with-one-occurrence/
 * Difficulty: Easy
 *
 * Given two string arrays words1 and words2, return the number of strings
 * that appear exactly once in each of the two arrays.
 */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  const map = new Map();
  words1.forEach(n => map.set(n, (map.get(n) || 0) + 1));
  [...map].forEach(([key, count]) => count !== 1 ? map.delete(key) : null);
  words2.forEach(n => map.has(n) ? map.set(n, (map.get(n) || 0) + 1) : null);

  return [...map].filter(([, count]) => count === 2).length;
};
