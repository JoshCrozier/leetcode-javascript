/**
 * 1326. Minimum Number of Taps to Open to Water a Garden
 * https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
 * Difficulty: Hard
 *
 * There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at
 * the point n. (i.e., the length of the garden is n).
 *
 * There are n + 1 taps located at points [0, 1, ..., n] in the garden.
 *
 * Given an integer n and an integer array ranges of length n + 1 where ranges[i] (0-indexed) means
 * the i-th tap can water the area [i - ranges[i], i + ranges[i]] if it was open.
 *
 * Return the minimum number of taps that should be open to water the whole garden, If the garden
 * cannot be watered return -1.
 */

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  const intervals = ranges.map((range, index) => [
    Math.max(0, index - range),
    Math.min(n, index + range)
  ]);

  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let taps = 0;
  let currentEnd = 0;
  let nextEnd = 0;
  let i = 0;

  while (i < intervals.length && currentEnd < n) {
    taps++;

    while (i < intervals.length && intervals[i][0] <= currentEnd) {
      nextEnd = Math.max(nextEnd, intervals[i][1]);
      i++;
    }

    if (currentEnd === nextEnd) return -1;
    currentEnd = nextEnd;
  }

  return currentEnd >= n ? taps : -1;
};
