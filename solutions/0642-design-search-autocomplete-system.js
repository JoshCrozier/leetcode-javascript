/**
 * 642. Design Search Autocomplete System
 * https://leetcode.com/problems/design-search-autocomplete-system/
 * Difficulty: Hard
 *
 * Design a search autocomplete system for a search engine. Users may input a sentence (at
 * least one word and end with a special character '#').
 *
 * You are given a string array sentences and an integer array times both of length n where
 * sentences[i] is a previously typed sentence and times[i] is the corresponding number of
 * times the sentence was typed. For each input character except '#', return the top 3
 * historical hot sentences that have the same prefix as the part of the sentence already typed.
 *
 * Here are the specific rules:
 * - The hot degree for a sentence is defined as the number of times a user typed the exactly
 *   same sentence before.
 * - The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest
 *   one). If several sentences have the same hot degree, use ASCII-code order (smaller one
 *   appears first).
 * - If less than 3 hot sentences exist, return as many as you can.
 * - When the input is a special character, it means the sentence ends, and in this case, you
 *   need to return an empty list.
 *
 * Implement the AutocompleteSystem class:
 * - AutocompleteSystem(String[] sentences, int[] times) Initializes the object with the
 *   sentences and times arrays.
 * - List<String> input(char c) This indicates that the user typed the character c.
 *   - Returns an empty array [] if c == '#' and stores the inputted sentence in the system.
 *   - Returns the top 3 historical hot sentences that have the same prefix as the part of the
 *     sentence already typed. If there are fewer than 3 matches, return them all.
 */

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
  this.trie = {};
  this.current = '';
  this.root = this.trie;

  for (let i = 0; i < sentences.length; i++) {
    this.insert(sentences[i], times[i]);
  }
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
  if (c === '#') {
    this.insert(this.current, 1);
    this.current = '';
    this.root = this.trie;
    return [];
  }

  this.current += c;
  if (!this.root[c]) {
    this.root[c] = {};
    this.root = this.root[c];
    return [];
  }

  this.root = this.root[c];
  const candidates = [];
  this.search(this.root, this.current, candidates);

  candidates.sort((a, b) => {
    if (a.count !== b.count) return b.count - a.count;
    return a.sentence < b.sentence ? -1 : 1;
  });

  return candidates.slice(0, 3).map(item => item.sentence);
};

AutocompleteSystem.prototype.insert = function(sentence, count) {
  let node = this.trie;
  for (const char of sentence) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }
  node.isEnd = (node.isEnd || 0) + count;
};

AutocompleteSystem.prototype.search = function(node, prefix, candidates) {
  if (node.isEnd) {
    candidates.push({ sentence: prefix, count: node.isEnd });
  }

  for (const char in node) {
    if (char !== 'isEnd') {
      this.search(node[char], prefix + char, candidates);
    }
  }
};
