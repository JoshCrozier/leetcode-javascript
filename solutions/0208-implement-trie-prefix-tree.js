/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * Difficulty: Medium
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store
 * and retrieve keys in a dataset of strings. There are various applications of this data structure,
 * such as autocomplete and spellchecker.
 *
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(String word) Inserts the string word into the trie.
 * - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted
 *   before), and false otherwise.
 * - boolean startsWith(String prefix) Returns true if there is a previously inserted string word
 *   that has the prefix prefix, and false otherwise.
 */

var Trie = function() {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const char of word) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.find(word);
  return node != null && node.isWord === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.find(prefix) !== null;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.find = function(word) {
  let node = this.root;
  for (const char of word) {
    node = node[char];
    if (!node) {
      return null;
    }
  }
  return node;
};
