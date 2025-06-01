/**
 * 2744. Find Maximum Number of String Pairs
 * https://leetcode.com/problems/find-maximum-number-of-string-pairs/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array words consisting of distinct strings.
 *
 * The string words[i] can be paired with the string words[j] if:
 * - The string words[i] is equal to the reversed string of words[j].
 * - 0 <= i < j < words.length.
 *
 * Return the maximum number of pairs that can be formed from the array words.
 *
 * Note that each string can belong in at most one pair.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const set = new Set();
  let result = 0;

  for (const word of words) {
    const reversed = word[1] + word[0];
    if (set.has(reversed)) {
      result++;
      set.delete(reversed);
    } else {
      set.add(word);
    }
  }

  return result;
};
