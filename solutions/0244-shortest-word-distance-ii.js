/**
 * 244. Shortest Word Distance II
 * https://leetcode.com/problems/shortest-word-distance-ii/
 * Difficulty: Medium
 *
 * Design a data structure that will be initialized with a string array, and then it should
 * answer queries of the shortest distance between two different strings from the array.
 *
 * Implement the WordDistance class:
 * - WordDistance(String[] wordsDict) initializes the object with the strings array wordsDict.
 * - int shortest(String word1, String word2) returns the shortest distance between word1 and
 *   word2 in the array wordsDict.
 */

/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
  this.wordIndices = new Map();
  for (let i = 0; i < wordsDict.length; i++) {
    if (!this.wordIndices.has(wordsDict[i])) {
      this.wordIndices.set(wordsDict[i], []);
    }
    this.wordIndices.get(wordsDict[i]).push(i);
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  const indices1 = this.wordIndices.get(word1);
  const indices2 = this.wordIndices.get(word2);
  let minDistance = Infinity;
  let i = 0;
  let j = 0;

  while (i < indices1.length && j < indices2.length) {
    minDistance = Math.min(minDistance, Math.abs(indices1[i] - indices2[j]));
    if (indices1[i] < indices2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return minDistance;
};
