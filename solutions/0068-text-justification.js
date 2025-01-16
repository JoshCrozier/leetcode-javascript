/**
 * 68. Text Justification
 * https://leetcode.com/problems/text-justification/
 * Difficulty: Hard
 *
 * Given an array of strings words and a width maxWidth, format the text such that each
 * line has exactly maxWidth characters and is fully (left and right) justified.
 *
 * You should pack your words in a greedy approach; that is, pack as many words as you
 * can in each line. Pad extra spaces ' ' when necessary so that each line has exactly
 * maxWidth characters.
 *
 * Extra spaces between words should be distributed as evenly as possible. If the number
 * of spaces on a line does not divide evenly between words, the empty slots on the left
 * will be assigned more spaces than the slots on the right.
 *
 * For the last line of text, it should be left-justified, and no extra space is inserted
 * between words.
 *
 * Note:
 * - A word is defined as a character sequence consisting of non-space characters only.
 * - Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
 * - The input array words contains at least one word.
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const result = [[]];
  result[0].count = 0;

  for (const word of words) {
    let row = result[result.length - 1];
    if (row.length && row.count + row.length + word.length > maxWidth) {
      result.push([]);
      row = result[result.length - 1];
      row.count = 0;
    }
    row.push(word);
    row.count += word.length;
  }

  for (let i = 0; i < result.length; i++) {
    const row = result[i];
    if (row.length === 1 || i === result.length - 1) {
      result[i] = row.join(' ') + ' '.repeat(maxWidth - row.count - row.length + 1);
      continue;
    }

    const min = ' '.repeat(Math.floor((maxWidth - row.count) / (row.length - 1)));
    for (let j = 1; j < row.length; j++) {
      const delimiter = j <= (maxWidth - row.count) % (row.length - 1) ? ' ' : '';
      row[0] += min + delimiter + row[j];
    }

    result[i] = row[0];
  }

  return result;
};
