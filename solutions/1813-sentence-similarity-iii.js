/**
 * 1813. Sentence Similarity III
 * https://leetcode.com/problems/sentence-similarity-iii/
 * Difficulty: Medium
 *
 * You are given two strings sentence1 and sentence2, each representing a sentence composed of
 * words. A sentence is a list of words that are separated by a single space with no leading
 * or trailing spaces. Each word consists of only uppercase and lowercase English characters.
 *
 * Two sentences s1 and s2 are considered similar if it is possible to insert an arbitrary
 * sentence (possibly empty) inside one of these sentences such that the two sentences become
 * equal. Note that the inserted sentence must be separated from existing words by spaces.
 *
 * For example:
 * - s1 = "Hello Jane" and s2 = "Hello my name is Jane" can be made equal by inserting "my name is"
 *   between "Hello" and "Jane" in s1.
 * - s1 = "Frog cool" and s2 = "Frogs are cool" are not similar, since although there is a sentence
 *   "s are" inserted into s1, it is not separated from "Frog" by a space.
 *
 * Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are
 * similar. Otherwise, return false.
 */

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  let words1 = sentence1.split(' ');
  let words2 = sentence2.split(' ');
  if (words1.length < words2.length) [words1, words2] = [words2, words1];

  let prefixLength = 0;
  while (prefixLength < words2.length && words1[prefixLength] === words2[prefixLength]) {
    prefixLength++;
  }

  let suffixLength = 0;
  while (suffixLength < words2.length - prefixLength
         && words1[words1.length - 1 - suffixLength] === words2[words2.length - 1 - suffixLength]) {
    suffixLength++;
  }

  return prefixLength + suffixLength >= words2.length;
};
