/**
 * 527. Word Abbreviation
 * https://leetcode.com/problems/word-abbreviation/
 * Difficulty: Hard
 *
 * Given an array of distinct strings words, return the minimal possible abbreviations for
 * every word.
 *
 * The following are the rules for a string abbreviation:
 * 1. The initial abbreviation for each word is: the first character, then the number of
 *    characters in between, followed by the last character.
 * 2. If more than one word shares the same abbreviation, then perform the following operation:
 *    - Increase the prefix (characters in the first part) of each of their abbreviations by 1.
 *      - For example, say you start with the words ["abcdef","abndef"] both initially abbreviated
 *        as "a4f". Then, a sequence of operations would be
 *        ["a4f","a4f"] -> ["ab3f","ab3f"] -> ["abc2f","abn2f"].
 *   - This operation is repeated until every abbreviation is unique.
 * 3. At the end, if an abbreviation did not make a word shorter, then keep it as the original word.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function(words) {
  const n = words.length;
  const result = new Array(n).fill('');
  const groups = new Map();

  function getAbbreviation(word, prefixLen) {
    const len = word.length;
    if (len <= prefixLen + 2) return word;
    return word.slice(0, prefixLen) + (len - prefixLen - 1) + word[len - 1];
  }

  for (let i = 0; i < n; i++) {
    const word = words[i];
    const prefixLen = 1;
    const abbr = getAbbreviation(word, prefixLen);

    if (!groups.has(abbr)) {
      groups.set(abbr, []);
    }
    groups.get(abbr).push([i, prefixLen]);
  }

  while (true) {
    let resolved = true;
    const newGroups = new Map();

    for (const [abbr, indices] of groups) {
      if (indices.length === 1) {
        const [index, prefixLen] = indices[0];
        const word = words[index];
        const finalAbbr = getAbbreviation(word, prefixLen);
        result[index] = finalAbbr.length < word.length ? finalAbbr : word;
        continue;
      }

      resolved = false;
      for (const [index, prefixLen] of indices) {
        const word = words[index];
        const newAbbr = getAbbreviation(word, prefixLen + 1);

        if (!newGroups.has(newAbbr)) {
          newGroups.set(newAbbr, []);
        }
        newGroups.get(newAbbr).push([index, prefixLen + 1]);
      }
    }

    if (resolved) break;
    groups.clear();
    for (const [abbr, indices] of newGroups) {
      groups.set(abbr, indices);
    }
  }

  return result;
};
