/**
 * 269. Alien Dictionary
 * https://leetcode.com/problems/alien-dictionary/
 * Difficulty: Hard
 *
 * There is a new alien language that uses the English alphabet. However, the order of the
 * letters is unknown to you.
 *
 * You are given a list of strings words from the alien language's dictionary. Now it is
 * claimed that the strings in words are sorted lexicographically by the rules of this new
 * language.
 *
 * If this claim is incorrect, and the given arrangement of string in words cannot correspond
 * to any order of letters, return "".
 *
 * Otherwise, return a string of the unique letters in the new alien language sorted in
 * lexicographically increasing order by the new language's rules. If there are multiple
 * solutions, return any of them.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const graph = new Map();
  const inDegree = new Map();

  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
        inDegree.set(char, 0);
      }
    }
  }

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];
    const minLen = Math.min(prev.length, curr.length);

    if (prev.length > curr.length && prev.startsWith(curr)) return '';

    for (let j = 0; j < minLen; j++) {
      if (prev[j] !== curr[j]) {
        if (!graph.get(prev[j]).has(curr[j])) {
          graph.get(prev[j]).add(curr[j]);
          inDegree.set(curr[j], inDegree.get(curr[j]) + 1);
        }
        break;
      }
    }
  }

  const queue = [];
  for (const [char, degree] of inDegree) {
    if (degree === 0) queue.push(char);
  }

  let result = '';
  while (queue.length) {
    const char = queue.shift();
    result += char;

    for (const next of graph.get(char)) {
      inDegree.set(next, inDegree.get(next) - 1);
      if (inDegree.get(next) === 0) queue.push(next);
    }
  }

  return result.length === graph.size ? result : '';
};
