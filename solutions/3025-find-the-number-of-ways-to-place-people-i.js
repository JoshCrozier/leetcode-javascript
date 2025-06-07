/**
 * 3025. Find the Number of Ways to Place People I
 * https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/
 * Difficulty: Medium
 *
 * You are given a 2D array points of size n x 2 representing integer coordinates of some points
 * on a 2D plane, where points[i] = [xi, yi].
 *
 * Count the number of pairs of points (A, B), where
 * - A is on the upper left side of B, and
 * - there are no other points in the rectangle (or line) they make (including the border).
 *
 * Return the count.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
  points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][1] >= points[j][1]) {
        let isValid = true;
        for (let k = 0; k < points.length; k++) {
          if (k !== i && k !== j) {
            if (points[k][0] >= points[i][0] && points[k][0] <= points[j][0]
                && points[k][1] <= points[i][1] && points[k][1] >= points[j][1]) {
              isValid = false;
              break;
            }
          }
        }
        if (isValid) result++;
      }
    }
  }

  return result;
};
