/**
 * 3445. Maximum Difference Between Even and Odd Frequency II
 * https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/
 * Difficulty: Hard
 *
 * You are given a string s and an integer k. Your task is to find the maximum difference between
 * the frequency of two characters, freq[a] - freq[b], in a substring subs of s, such that:
 * - subs has a size of at least k.
 * - Character a has an odd frequency in subs.
 * - Character b has an even frequency in subs.
 *
 * Return the maximum difference.
 *
 * Note that subs can contain more than 2 distinct characters.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDifference = function(s, k) {
  const n = s.length;
  let result = -Infinity;

  const calculateParityStatus = (freqA, freqB) => {
    return ((freqA & 1) << 1) | (freqB & 1);
  };

  for (const charA of ['0', '1', '2', '3', '4']) {
    for (const charB of ['0', '1', '2', '3', '4']) {
      if (charA === charB) continue;

      const minDifferences = [Infinity, Infinity, Infinity, Infinity];
      let currentFreqA = 0;
      let currentFreqB = 0;
      let prefixFreqA = 0;
      let prefixFreqB = 0;
      let leftBoundary = -1;

      for (let rightIndex = 0; rightIndex < n; rightIndex++) {
        currentFreqA += s[rightIndex] === charA ? 1 : 0;
        currentFreqB += s[rightIndex] === charB ? 1 : 0;

        while (rightIndex - leftBoundary >= k && currentFreqB - prefixFreqB >= 2) {
          const prefixStatus = calculateParityStatus(prefixFreqA, prefixFreqB);
          minDifferences[prefixStatus] = Math.min(
            minDifferences[prefixStatus],
            prefixFreqA - prefixFreqB
          );
          leftBoundary++;
          prefixFreqA += s[leftBoundary] === charA ? 1 : 0;
          prefixFreqB += s[leftBoundary] === charB ? 1 : 0;
        }

        const currentStatus = calculateParityStatus(currentFreqA, currentFreqB);
        const targetStatus = currentStatus ^ 0b10;

        if (minDifferences[targetStatus] !== Infinity) {
          result = Math.max(
            result,
            currentFreqA - currentFreqB - minDifferences[targetStatus]
          );
        }
      }
    }
  }

  return result;
};
