/**
 * 1002. Find Common Characters
 * https://leetcode.com/problems/find-common-characters/
 * Difficulty: Easy
 *
 * Given a string array words, return an array of all characters that show up in all strings within
 * the words (including duplicates). You may return the answer in any order.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  return words
    .map(word => [...word])
    .reduce((common, word) => common.filter(s => {
      const index = word.indexOf(s);
      if (index !== -1) {
        word.splice(index, 1);
      }
      return index !== -1;
    }), [...words[0]]);
};
