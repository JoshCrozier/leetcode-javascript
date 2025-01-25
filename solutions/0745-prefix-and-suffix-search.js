/**
 * 745. Prefix and Suffix Search
 * https://leetcode.com/problems/prefix-and-suffix-search/
 * Difficulty: Hard
 *
 * Design a special dictionary that searches the words in it by a prefix and a suffix.
 *
 * Implement the WordFilter class:
 * - WordFilter(string[] words) Initializes the object with the words in the dictionary.
 * - f(string pref, string suff) Returns the index of the word in the dictionary, which
 *   has the prefix pref and the suffix suff. If there is more than one valid index,
 *   return the largest of them. If there is no such word in the dictionary, return -1.
 */

/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  this.map = new Map();

  for (let i = 0; i < words.length; i++) {
    let prefix = '';

    for (let j = 0; j <= words[i].length; j++) {
      let suffix = '';

      for (let k = 0; k <= words[i].length; k++) {
        suffix = words[i].slice(k);
        this.map.set(prefix + '#' + suffix, i);
      }

      prefix += words[i][j];
    }
  }
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
  const target = `${pref}#${suff}`;
  return this.map.has(target) ? this.map.get(target) : -1;
};
