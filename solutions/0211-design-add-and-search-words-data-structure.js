/**
 * 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * Difficulty: Medium
 *
 * Design a data structure that supports adding new words and finding if a string matches
 * any previously added string.
 *
 * Implement the WordDictionary class:
 * - WordDictionary() Initializes the object.
 * - void addWord(word) Adds word to the data structure, it can be matched later.
 * - bool search(word) Returns true if there is any string in the data structure that
 *   matches word or false otherwise. word may contain dots '.' where dots can be
 *   matched with any letter.
 */


var WordDictionary = function() {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;

  for (const character of word) {
    node[character] = node[character] || {};
    node = node[character];
  }

  node.isTail = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return dfs(this.root, 0);

  function dfs(node, i) {
    if (word.length === i) {
      return node.isTail;
    }
    if (word[i] === '.') {
      for (const key in node) {
        if (dfs(node[key], i + 1)) {
          return true;
        }
      }
    } else if (node[word[i]] && dfs(node[word[i]], i + 1)) {
      return true;
    }

    return false;
  }
};
