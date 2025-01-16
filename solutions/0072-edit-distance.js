/**
 * 72. Edit Distance
 * https://leetcode.com/problems/edit-distance/
 * Difficulty: Medium
 *
 * Given two strings word1 and word2, return the minimum number of operations required to
 * convert word1 to word2.
 *
 * You have the following three operations permitted on a word:
 * - Insert a character
 * - Delete a character
 * - Replace a character
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const cache = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1));

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        cache[0][j] = j;
      } else if (j === 0) {
        cache[i][0] = i;
      } else if (word1[i - 1] == word2[j - 1]) {
        cache[i][j] = cache[i - 1][j - 1];
      } else {
        cache[i][j] = Math.min(cache[i][j - 1], cache[i - 1][j - 1], cache[i - 1][j]) + 1;
      }
    }
  }

  return cache[word1.length][word2.length];
};
