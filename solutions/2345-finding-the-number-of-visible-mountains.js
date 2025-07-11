/**
 * 2345. Finding the Number of Visible Mountains
 * https://leetcode.com/problems/finding-the-number-of-visible-mountains/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 2D integer array peaks where peaks[i] = [xi, yi] states that mountain
 * i has a peak at coordinates (xi, yi). A mountain can be described as a right-angled isosceles
 * triangle, with its base along the x-axis and a right angle at its peak. More formally, the
 * gradients of ascending and descending the mountain are 1 and -1 respectively.
 *
 * A mountain is considered visible if its peak does not lie within another mountain (including
 * the border of other mountains).
 *
 * Return the number of visible mountains.
 */

/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function(peaks) {
  const n = peaks.length;

  peaks.sort((a, b) => {
    const leftA = a[0] - a[1];
    const leftB = b[0] - b[1];
    if (leftA === leftB) {
      return (b[0] + b[1]) - (a[0] + a[1]);
    }
    return leftA - leftB;
  });

  let result = 0;
  let maxEnd = -Infinity;

  for (let i = 0; i < n; i++) {
    const [x, y] = peaks[i];
    const rightIntercept = x + y;

    if (rightIntercept > maxEnd) {
      maxEnd = rightIntercept;
      if (i < n - 1 && peaks[i][0] === peaks[i + 1][0] && peaks[i][1] === peaks[i + 1][1]) {
        continue;
      }
      result++;
    }
  }

  return result;
};
