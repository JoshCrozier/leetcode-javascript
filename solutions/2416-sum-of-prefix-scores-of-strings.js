/**
 * 2416. Sum of Prefix Scores of Strings
 * https://leetcode.com/problems/sum-of-prefix-scores-of-strings/
 * Difficulty: Hard
 *
 * You are given an array words of size n consisting of non-empty strings.
 *
 * We define the score of a string term as the number of strings words[i] such that term is
 * a prefix of words[i].
 * - For example, if words = ["a", "ab", "abc", "cab"], then the score of "ab" is 2, since
 *   "ab" is a prefix of both "ab" and "abc".
 *
 * Return an array answer of size n where answer[i] is the sum of scores of every non-empty
 * prefix of words[i].
 *
 * Note that a string is considered as a prefix of itself.
 */

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
  class TrieNode {
    constructor() {
      this.children = new Map();
      this.count = 0;
    }
  }

  const root = new TrieNode();

  for (const word of words) {
    let node = root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
      node.count++;
    }
  }

  const result = [];
  for (const word of words) {
    let node = root;
    let score = 0;
    for (const char of word) {
      node = node.children.get(char);
      score += node.count;
    }
    result.push(score);
  }

  return result;
};
