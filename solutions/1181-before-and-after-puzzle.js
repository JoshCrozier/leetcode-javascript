/**
 * 1181. Before and After Puzzle
 * https://leetcode.com/problems/before-and-after-puzzle/
 * Difficulty: Medium
 *
 * Given a list of phrases, generate a list of Before and After puzzles.
 *
 * A phrase is a string that consists of lowercase English letters and spaces only. No
 * space appears in the start or the end of a phrase. There are no consecutive spaces
 * in a phrase.
 *
 * Before and After puzzles are phrases that are formed by merging two phrases where the
 * last word of the first phrase is the same as the first word of the second phrase.
 *
 * Return the Before and After puzzles that can be formed by every two phrases phrases[i]
 * and phrases[j] where i != j. Note that the order of matching two phrases matters, we
 * want to consider both orders.
 *
 * You should return a list of distinct strings sorted lexicographically.
 */

/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = function(phrases) {
  const set = new Set();

  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < phrases.length; j++) {
      if (i !== j) {
        const firstWords = phrases[i].split(' ');
        const secondWords = phrases[j].split(' ');

        const lastWordFirst = firstWords[firstWords.length - 1];
        const firstWordSecond = secondWords[0];
        if (lastWordFirst === firstWordSecond) {
          const merged = firstWords.concat(secondWords.slice(1)).join(' ');
          set.add(merged);
        }
      }
    }
  }

  return Array.from(set).sort();
};
