/**
 * 1408. String Matching in an Array
 * https://leetcode.com/problems/string-matching-in-an-array/
 * Difficulty: Easy
 *
 * Given an array of string words. Return all strings in words which is
 * substring of another word in any order.
 *
 * String words[i] is substring of words[j], if can be obtained removing
 * some characters to left and/or right side of words[j].
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  return words.filter(s => words.some(word => word !== s && word.includes(s)));
};
