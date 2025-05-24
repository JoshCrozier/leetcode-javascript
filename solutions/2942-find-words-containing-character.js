/**
 * 2942. Find Words Containing Character
 * https://leetcode.com/problems/find-words-containing-character/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array of strings words and a character x.
 *
 * Return an array of indices representing the words that contain the character x.
 *
 * Note that the returned array may be in any order.
 */

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }

  return result;
};
