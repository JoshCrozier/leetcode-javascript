/**
 * 1258. Synonymous Sentences
 * https://leetcode.com/problems/synonymous-sentences/
 * Difficulty: Medium
 *
 * You are given a list of equivalent string pairs synonyms where synonyms[i] = [si, ti]
 * indicates that si and ti are equivalent strings. You are also given a sentence text.
 *
 * Return all possible synonymous sentences sorted lexicographically.
 */

/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function(synonyms, text) {
  const graph = new Map();

  for (const [word1, word2] of synonyms) {
    if (!graph.has(word1)) graph.set(word1, []);
    if (!graph.has(word2)) graph.set(word2, []);
    graph.get(word1).push(word2);
    graph.get(word2).push(word1);
  }

  const words = text.split(' ');
  const allCombinations = [];
  backtrack(0, []);
  return allCombinations.sort();

  function findSynonyms(word) {
    if (!graph.has(word)) return [word];

    const visited = new Set();
    const queue = [word];
    const synonymGroup = [];

    while (queue.length > 0) {
      const current = queue.shift();
      if (visited.has(current)) continue;

      visited.add(current);
      synonymGroup.push(current);

      for (const neighbor of graph.get(current)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }

    return synonymGroup.sort();
  }

  function backtrack(index, currentSentence) {
    if (index === words.length) {
      allCombinations.push(currentSentence.join(' '));
      return;
    }

    const synonyms = findSynonyms(words[index]);
    for (const synonym of synonyms) {
      currentSentence.push(synonym);
      backtrack(index + 1, currentSentence);
      currentSentence.pop();
    }
  }
};
