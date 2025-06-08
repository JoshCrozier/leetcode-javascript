/**
 * 243. Shortest Word Distance
 * https://leetcode.com/problems/shortest-word-distance/
 * Difficulty: Easy
 *
 * Given an array of strings wordsDict and two different strings that already exist in the array
 * word1 and word2, return the shortest distance between these two words in the list.
 */

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
  let result = Infinity;
  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      index1 = i;
      if (index2 !== -1) {
        result = Math.min(result, index1 - index2);
      }
    } else if (wordsDict[i] === word2) {
      index2 = i;
      if (index1 !== -1) {
        result = Math.min(result, index2 - index1);
      }
    }
  }

  return result;
};
