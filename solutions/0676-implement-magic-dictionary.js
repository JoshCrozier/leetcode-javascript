/**
 * 676. Implement Magic Dictionary
 * https://leetcode.com/problems/implement-magic-dictionary/
 * Difficulty: Medium
 *
 * Design a data structure that is initialized with a list of different words. Provided a string,
 * you should determine if you can change exactly one character in this string to match any word
 * in the data structure.
 *
 * Implement the MagicDictionary class:
 * - MagicDictionary() Initializes the object.
 * - void buildDict(String[] dictionary) Sets the data structure with an array of distinct
 *   strings dictionary.
 * - bool search(String searchWord) Returns true if you can change exactly one character in
 *   searchWord to match any string in the data structure, otherwise returns false.
 */

var MagicDictionary = function() {
  this.words = new Set();
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  this.words = new Set(dictionary);
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  const words = searchWord.split('');
  return Array.from(this.words).some(word => {
    if (word.length !== searchWord.length) return false;
    let diff = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== words[i]) diff++;
      if (diff > 1) return false;
    }
    return diff === 1;
  });
};
