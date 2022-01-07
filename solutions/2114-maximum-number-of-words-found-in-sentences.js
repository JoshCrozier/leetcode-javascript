/**
 * 2114. Maximum Number of Words Found in Sentences
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 * Difficulty: Easy
 *
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
 *
 * You are given an array of strings sentences, where each sentences[i] represents a single sentence.
 *
 * Return the maximum number of words that appear in a single sentence.
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  return sentences.reduce((max, str) => Math.max(max, str.split(/\s+/).length), 0);
};
