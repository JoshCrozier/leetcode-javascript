/**
 * 1032. Stream of Characters
 * https://leetcode.com/problems/stream-of-characters/
 * Difficulty: Hard
 *
 * Design an algorithm that accepts a stream of characters and checks if a suffix of these
 * characters is a string of a given array of strings words.
 *
 * For example, if words = ["abc", "xyz"] and the stream added the four characters (one by one)
 * 'a', 'x', 'y', and 'z', your algorithm should detect that the suffix "xyz" of the characters
 * "axyz" matches "xyz" from words.
 *
 * Implement the StreamChecker class:
 * - StreamChecker(String[] words) Initializes the object with the strings array words.
 * - boolean query(char letter) Accepts a new character from the stream and returns true if any
 *   non-empty suffix from the stream forms a word that is in words.
 */

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.trie = {};
  this.stream = [];

  words.forEach(word => buildTrie(word, this.trie));

  function buildTrie(word, trie) {
    let node = trie;
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      node[char] = node[char] || {};
      node = node[char];
    }
    node.isEnd = true;
  }
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.stream.push(letter);
  let node = this.trie;

  for (let i = this.stream.length - 1; i >= 0; i--) {
    const char = this.stream[i];
    if (!node[char]) return false;
    node = node[char];
    if (node.isEnd) return true;
  }

  return false;
};
