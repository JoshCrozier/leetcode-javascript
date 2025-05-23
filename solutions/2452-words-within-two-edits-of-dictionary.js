/**
 * 2452. Words Within Two Edits of Dictionary
 * https://leetcode.com/problems/words-within-two-edits-of-dictionary/
 * Difficulty: Medium
 *
 * You are given two string arrays, queries and dictionary. All words in each array comprise of
 * lowercase English letters and have the same length.
 *
 * In one edit you can take a word from queries, and change any letter in it to any other letter.
 * Find all words from queries that, after a maximum of two edits, equal some word from dictionary.
 *
 * Return a list of all words from queries, that match with some word from dictionary after a
 * maximum of two edits. Return the words in the same order they appear in queries.
 */

/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
  const result = [];

  for (const query of queries) {
    for (const word of dictionary) {
      let edits = 0;
      for (let i = 0; i < query.length; i++) {
        if (query[i] !== word[i]) {
          edits++;
          if (edits > 2) break;
        }
      }
      if (edits <= 2) {
        result.push(query);
        break;
      }
    }
  }

  return result;
};
