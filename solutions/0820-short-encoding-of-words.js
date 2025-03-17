/**
 * 820. Short Encoding of Words
 * https://leetcode.com/problems/short-encoding-of-words/
 * Difficulty: Medium
 *
 * A valid encoding of an array of words is any reference string s and array of indices
 * such that:
 * - words.length == indices.length
 * - The reference string s ends with the '#' character.
 * - For each index indices[i], the substring of s starting from indices[i] and up to
 *   (but not including) the next '#' character is equal to words[i].
 *
 * Given an array of words, return the length of the shortest reference string s possible
 * of any valid encoding of words.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const uniqueWords = [...new Set(words)];
  const wordSet = new Set(uniqueWords);

  for (const word of uniqueWords) {
    for (let i = 1; i < word.length; i++) {
      const suffix = word.slice(i);
      wordSet.delete(suffix);
    }
  }

  let result = 0;
  for (const word of wordSet) {
    result += word.length + 1;
  }

  return result;
};
