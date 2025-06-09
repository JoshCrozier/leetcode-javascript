/**
 * 245. Shortest Word Distance III
 * https://leetcode.com/problems/shortest-word-distance-iii/
 * Difficulty: Medium
 *
 * Given an array of strings wordsDict and two strings that already exist in the array word1
 * and word2, return the shortest distance between the occurrence of these two words in the list.
 *
 * Note that word1 and word2 may be the same. It is guaranteed that they represent two individual
 * words in the list.
 */

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
  let result = Infinity;
  let lastWord1Index = -1;
  let lastWord2Index = -1;
  const areSameWords = word1 === word2;

  for (let index = 0; index < wordsDict.length; index++) {
    const currentWord = wordsDict[index];

    if (currentWord === word1) {
      if (areSameWords) {
        if (lastWord1Index !== -1) {
          result = Math.min(result, index - lastWord1Index);
        }
      } else if (lastWord2Index !== -1) {
        result = Math.min(result, index - lastWord2Index);
      }
      lastWord1Index = index;
    } else if (!areSameWords && currentWord === word2) {
      if (lastWord1Index !== -1) {
        result = Math.min(result, index - lastWord1Index);
      }
      lastWord2Index = index;
    }
  }

  return result;
};
