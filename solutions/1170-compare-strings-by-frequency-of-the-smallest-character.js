/**
 * 1170. Compare Strings by Frequency of the Smallest Character
 * https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
 * Difficulty: Medium
 *
 * Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty
 * string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest
 * character is 'c', which has a frequency of 2.
 *
 * You are given an array of strings words and another array of query strings queries. For each
 * query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each
 * W in words.
 *
 * Return an integer array answer, where each answer[i] is the answer to the ith query.
 */

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const wordFrequencies = words.map(getMinCharFreq).sort((a, b) => a - b);

  return queries.map(query => {
    const queryFreq = getMinCharFreq(query);
    let left = 0;
    let right = wordFrequencies.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (wordFrequencies[mid] <= queryFreq) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return wordFrequencies.length - left;
  });

  function getMinCharFreq(str) {
    let minChar = 'z';
    let freq = 0;
    for (const char of str) {
      if (char < minChar) {
        minChar = char;
        freq = 1;
      } else if (char === minChar) {
        freq++;
      }
    }
    return freq;
  }
};
