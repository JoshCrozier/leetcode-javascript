/**
 * 318. Maximum Product of Word Lengths
 * https://leetcode.com/problems/maximum-product-of-word-lengths/
 * Difficulty: Medium
 *
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j])
 * where the two words do not share common letters. If no such two words exist, return 0.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const letters = words.map(word => Array.from(new Set(word)));
  let result = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!letters[i].some(item => letters[j].includes(item))) {
        const product = words[i].length * words[j].length;
        if (product > result) {
          result = product;
        }
      }
    }
  }

  return result;
};
