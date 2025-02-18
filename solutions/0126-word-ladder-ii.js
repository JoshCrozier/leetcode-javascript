/**
 * 126. Word Ladder II
 * https://leetcode.com/problems/word-ladder-ii/
 * Difficulty: Hard
 *
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList
 * is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 * - Every adjacent pair of words differs by a single letter.
 * - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
 * - sk == endWord
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest
 * transformation sequences from beginWord to endWord, or an empty list if no such sequence
 * exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const set = new Set(wordList);
  const queue = [beginWord];
  const group = [];
  let isEnd = false;

  while (queue.length && !isEnd) {
    group.push([...queue]);
    const limit = queue.length;
    for (let i = 0; i < limit && !isEnd; i++) {
      const from = queue.shift();
      for (const word of set) {
        if (!isValid(from, word)) {
          continue;
        } else if (word === endWord) {
          isEnd = true;
          break;
        }
        queue.push(word);
        set.delete(word);
      }
    }
  }

  if (!isEnd) {
    return [];
  }

  const result = [[endWord]];
  for (let i = group.length - 1; i >= 0; i--) {
    const limit = result.length;
    for (let j = 0; j < limit; j++) {
      const path = result.shift();
      for (const word of group[i]) {
        if (!isValid(path[0], word)) {
          continue;
        }
        result.push([word, ...path]);
      }
    }
  }

  return result;

  function isValid(a, b) {
    let count = 0;
    for (let i = 0; i < a.length && count < 2; i++) {
      if (a[i] !== b[i]) {
        count++;
      }
    }
    return count === 1;
  }
};
