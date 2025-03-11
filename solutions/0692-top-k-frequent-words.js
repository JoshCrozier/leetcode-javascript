/**
 * 692. Top K Frequent Words
 * https://leetcode.com/problems/top-k-frequent-words/
 * Difficulty: Medium
 *
 * Given an array of strings words and an integer k, return the k most frequent strings.
 *
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with
 * the same frequency by their lexicographical order.
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = new Map();
  words.forEach(word => map.set(word, (map.get(word) || 0) + 1));
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, k)
    .map(([word]) => word);
};
