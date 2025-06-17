/**
 * 418. Sentence Screen Fitting
 * https://leetcode.com/problems/sentence-screen-fitting/
 * Difficulty: Medium
 *
 * Given a rows x cols screen and a sentence represented as a list of strings, return the number
 * of times the given sentence can be fitted on the screen.
 *
 * The order of words in the sentence must remain unchanged, and a word cannot be split into two
 * lines. A single space must separate two consecutive words in a line.
 */

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  const sentenceLength = sentence.length;
  const wordLengths = sentence.map(word => word.length + 1);
  let rowIndex = 0;
  let colIndex = 0;
  let wordIndex = 0;
  let result = 0;

  while (rowIndex < rows) {
    if (colIndex + wordLengths[wordIndex] - 1 <= cols) {
      colIndex += wordLengths[wordIndex];
      wordIndex++;
      if (wordIndex === sentenceLength) {
        result++;
        wordIndex = 0;
      }
    } else {
      rowIndex++;
      colIndex = 0;
    }
  }

  return result;
};
