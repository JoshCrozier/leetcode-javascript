/**
 * 737. Sentence Similarity II
 * https://leetcode.com/problems/sentence-similarity-ii/
 * Difficulty: Medium
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
 * transitive. For example, if the words a and b are similar, and the words b and c are similar,
 * then a and c are similar.
 */

/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const graph = new Map();
  for (const [word1, word2] of similarPairs) {
    if (!graph.has(word1)) graph.set(word1, new Set());
    if (!graph.has(word2)) graph.set(word2, new Set());
    graph.get(word1).add(word2);
    graph.get(word2).add(word1);
  }

  for (let i = 0; i < sentence1.length; i++) {
    if (!areSimilar(sentence1[i], sentence2[i])) {
      return false;
    }
  }

  return true;

  function areSimilar(start, target) {
    if (start === target) return true;
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length) {
      const word = queue.shift();
      for (const neighbor of graph.get(word) || []) {
        if (neighbor === target) return true;
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return false;
  }
};
