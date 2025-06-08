/**
 * 3085. Minimum Deletions to Make String K-Special
 * https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/
 * Difficulty: Medium
 *
 * You are given a string word and an integer k.
 *
 * We consider word to be k-special if |freq(word[i]) - freq(word[j])| <= k for all indices i
 * and j in the string.
 *
 * Here, freq(x) denotes the frequency of the character x in word, and |y| denotes the absolute
 * value of y.
 *
 * Return the minimum number of characters you need to delete to make word k-special.
 */

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const freq = new Array(26).fill(0);

  for (const char of word) {
    freq[char.charCodeAt(0) - 97]++;
  }

  const counts = freq.filter(x => x > 0).sort((a, b) => a - b);
  let minDeletions = Infinity;
  for (let i = 0; i < counts.length; i++) {
    let deletions = 0;
    for (let j = 0; j < i; j++) {
      deletions += counts[j];
    }
    for (let j = i; j < counts.length; j++) {
      if (counts[j] - counts[i] > k) {
        deletions += counts[j] - (counts[i] + k);
      }
    }
    minDeletions = Math.min(minDeletions, deletions);
  }

  return minDeletions;
};
