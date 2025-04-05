/**
 * 1178. Number of Valid Words for Each Puzzle
 * https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/
 * Difficulty: Hard
 *
 * With respect to a given puzzle string, a word is valid if both the following conditions
 * are satisfied:
 * - word contains the first letter of puzzle.
 * - For each letter in word, that letter is in puzzle.
 *   - For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage",
 *     and "baggage", while
 *   - invalid words are "beefed" (does not include 'a') and "based" (includes 's' which
 *     is not in the puzzle).
 *
 * Return an array answer, where answer[i] is the number of words in the given word list words
 * that is valid with respect to the puzzle puzzles[i].
 */

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
  const wordMasks = new Map();
  for (const word of words) {
    const mask = getBitmask(word);
    wordMasks.set(mask, (wordMasks.get(mask) || 0) + 1);
  }

  const result = [];
  for (const puzzle of puzzles) {
    const puzzleMask = getBitmask(puzzle);
    const firstCharBit = 1 << (puzzle.charCodeAt(0) - 97);
    let count = 0;

    let submask = puzzleMask;
    do {
      if (submask & firstCharBit && wordMasks.has(submask)) {
        count += wordMasks.get(submask);
      }
      submask = (submask - 1) & puzzleMask;
    } while (submask);

    result.push(count);
  }

  return result;

  function getBitmask(str) {
    let mask = 0;
    for (const char of str) {
      mask |= 1 << (char.charCodeAt(0) - 97);
    }
    return mask;
  }
};
