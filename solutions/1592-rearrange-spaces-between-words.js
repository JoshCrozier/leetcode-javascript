/**
 * 1592. Rearrange Spaces Between Words
 * https://leetcode.com/problems/rearrange-spaces-between-words/
 * Difficulty: Easy
 *
 * You are given a string text of words that are placed among some number of spaces. Each word
 * consists of one or more lowercase English letters and are separated by at least one space.
 * It's guaranteed that text contains at least one word.
 *
 * Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent
 * words and that number is maximized. If you cannot redistribute all the spaces equally, place
 * the extra spaces at the end, meaning the returned string should be the same length as text.
 *
 * Return the string after rearranging the spaces.
 */

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const words = text.trim().split(/\s+/);
  const spaceCount = text.length - words.join('').length;
  const wordCount = words.length;

  if (wordCount === 1) return words[0] + ' '.repeat(spaceCount);

  const spacesBetween = Math.floor(spaceCount / (wordCount - 1));
  const extraSpaces = spaceCount % (wordCount - 1);

  return words.join(' '.repeat(spacesBetween)) + ' '.repeat(extraSpaces);
};
