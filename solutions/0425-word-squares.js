/**
 * 425. Word Squares
 * https://leetcode.com/problems/word-squares/
 * Difficulty: Hard
 *
 * Given an array of unique strings words, return all the word squares you can build from
 * words. The same word from words can be used multiple times. You can return the answer
 * in any order.
 *
 * A sequence of strings forms a valid word square if the kth row and column read the same
 * string, where 0 <= k < max(numRows, numColumns).
 *
 * - For example, the word sequence ["ball","area","lead","lady"] forms a word square because
 *   each word reads the same both horizontally and vertically.
 */

/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
  const result = [];
  const prefixMap = new Map();
  const wordLength = words[0].length;

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      const prefix = word.slice(0, i);
      if (!prefixMap.has(prefix)) {
        prefixMap.set(prefix, []);
      }
      prefixMap.get(prefix).push(word);
    }
  }

  function buildSquare(currentSquare) {
    if (currentSquare.length === wordLength) {
      result.push([...currentSquare]);
      return;
    }

    const prefix = currentSquare
      .map(word => word[currentSquare.length])
      .join('');

    const candidates = prefixMap.get(prefix) || [];
    for (const candidate of candidates) {
      currentSquare.push(candidate);
      buildSquare(currentSquare);
      currentSquare.pop();
    }
  }

  for (const word of words) {
    buildSquare([word]);
  }

  return result;
};
