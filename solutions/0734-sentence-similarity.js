/**
 * 734. Sentence Similarity
 * https://leetcode.com/problems/sentence-similarity/
 * Difficulty: Easy
 *
 * We can represent a sentence as an array of words, for example, the sentence
 * "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].
 *
 * Given two sentences sentence1 and sentence2 each represented as a string array and given an
 * array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two
 * words xi and yi are similar.
 *
 * Return true if sentence1 and sentence2 are similar, or false if they are not similar.
 *
 * Two sentences are similar if:
 * - They have the same length (i.e., the same number of words)
 * - sentence1[i] and sentence2[i] are similar.
 *
 * Notice that a word is always similar to itself, also notice that the similarity relation is
 * not transitive. For example, if the words a and b are similar, and the words b and c are
 * similar, a and c are not necessarily similar.
 */

/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const similarWords = new Set();
  for (const [word1, word2] of similarPairs) {
    similarWords.add(`${word1}:${word2}`);
    similarWords.add(`${word2}:${word1}`);
  }

  for (let i = 0; i < sentence1.length; i++) {
    const word1 = sentence1[i];
    const word2 = sentence2[i];
    if (word1 !== word2 && !similarWords.has(`${word1}:${word2}`)) {
      return false;
    }
  }

  return true;
};
