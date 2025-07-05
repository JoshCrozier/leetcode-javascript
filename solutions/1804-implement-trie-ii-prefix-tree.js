/**
 * 1804. Implement Trie II (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-ii-prefix-tree/
 * Difficulty: Medium
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store
 * and retrieve keys in a dataset of strings. There are various applications of this data structure,
 * such as autocomplete and spellchecker.
 *
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(String word) Inserts the string word into the trie.
 * - int countWordsEqualTo(String word) Returns the number of instances of the string word in the
 *   trie.
 * - int countWordsStartingWith(String prefix) Returns the number of strings in the trie that have
 *   the string prefix as a prefix.
 * - void erase(String word) Erases the string word from the trie.
 */

var Trie = function() {
  this.root = { children: {}, wordCount: 0, prefixCount: 0 };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let currentNode = this.root;
  for (const char of word) {
    if (!currentNode.children[char]) {
      currentNode.children[char] = { children: {}, wordCount: 0, prefixCount: 0 };
    }
    currentNode = currentNode.children[char];
    currentNode.prefixCount++;
  }
  currentNode.wordCount++;
};

/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
  let currentNode = this.root;
  for (const char of word) {
    if (!currentNode.children[char]) {
      return 0;
    }
    currentNode = currentNode.children[char];
  }
  return currentNode.wordCount;
};

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
  let currentNode = this.root;
  for (const char of prefix) {
    if (!currentNode.children[char]) {
      return 0;
    }
    currentNode = currentNode.children[char];
  }
  return currentNode.prefixCount;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
  let currentNode = this.root;
  for (const char of word) {
    currentNode = currentNode.children[char];
    currentNode.prefixCount--;
  }
  currentNode.wordCount--;
};
