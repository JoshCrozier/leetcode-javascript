/**
 * 127. Word Ladder
 * https://leetcode.com/problems/word-ladder/
 * Difficulty: Hard
 *
 * A transformation sequence from word beginWord to word endWord using a dictionary
 * wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 * - Every adjacent pair of words differs by a single letter.
 * - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to
 *   be in wordList.
 * - sk == endWord
 * Given two words, beginWord and endWord, and a dictionary wordList, return the
 * number of words in the shortest transformation sequence from beginWord to
 * endWord, or 0 if no such sequence exists.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const set = new Set(wordList);
  let queue = [beginWord];
  let count = 1;

  while (queue.length) {
    const group = [];

    for (const word of queue) {
      if (word === endWord) {
        return count;
      }

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const str = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
          if (set.has(str)) {
            group.push(str);
            set.delete(str);
          }
        }
      }
    }

    queue = group;
    count++;
  }

  return 0;
};
