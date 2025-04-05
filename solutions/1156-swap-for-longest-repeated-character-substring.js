/**
 * 1156. Swap For Longest Repeated Character Substring
 * https://leetcode.com/problems/swap-for-longest-repeated-character-substring/
 * Difficulty: Medium
 *
 * You are given a string text. You can swap two of the characters in the text.
 *
 * Return the length of the longest substring with repeated characters.
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
  const map = new Map();
  for (const char of text) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let result = 0;
  for (let i = 0; i < text.length;) {
    const currentChar = text[i];
    const segmentStart = i;

    while (i < text.length && text[i] === currentChar) i++;
    const segmentLength = i - segmentStart;

    const totalAvailable = map.get(currentChar);
    if (i < text.length && segmentLength < totalAvailable) {
      const nextStart = i + 1;
      let nextLength = 0;
      while (nextStart + nextLength < text.length && text[nextStart + nextLength] === currentChar) {
        nextLength++;
      }
      result = Math.max(result, Math.min(segmentLength + nextLength + 1, totalAvailable));
    }
    result = Math.max(result, Math.min(
      segmentLength + (totalAvailable > segmentLength ? 1 : 0), totalAvailable
    ));
  }

  return result;
};
