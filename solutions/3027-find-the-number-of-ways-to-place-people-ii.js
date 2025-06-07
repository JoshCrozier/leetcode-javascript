/**
 * 3027. Find the Number of Ways to Place People II
 * https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/
 * Difficulty: Hard
 *
 * You are given a 2D array points of size n x 2 representing integer coordinates of some points
 * on a 2D-plane, where points[i] = [xi, yi].
 *
 * We define the right direction as positive x-axis (increasing x-coordinate) and the left
 * direction as negative x-axis (decreasing x-coordinate). Similarly, we define the up direction
 * as positive y-axis (increasing y-coordinate) and the down direction as negative y-axis
 * (decreasing y-coordinate)
 *
 * You have to place n people, including Alice and Bob, at these points such that there is exactly
 * one person at every point. Alice wants to be alone with Bob, so Alice will build a rectangular
 * fence with Alice's position as the upper left corner and Bob's position as the lower right
 * corner of the fence (Note that the fence might not enclose any area, i.e. it can be a line).
 * If any person other than Alice and Bob is either inside the fence or on the fence, Alice will
 * be sad.
 *
 * Return the number of pairs of points where you can place Alice and Bob, such that Alice does not
 * become sad on building the fence.
 *
 * Note that Alice can only build a fence with Alice's position as the upper left corner, and Bob's
 * position as the lower right corner. For example, Alice cannot build either of the fences in the
 * picture below with four corners (1, 1), (1, 3), (3, 1), and (3, 3), because:
 * - With Alice at (3, 3) and Bob at (1, 1), Alice's position is not the upper left corner and Bob's
 *   position is not the lower right corner of the fence.
 * - With Alice at (1, 3) and Bob at (1, 1), Bob's position is not the lower right corner of the
 *   fence.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
  points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  let result = 0;

  for (let i = 0; i < points.length; i++) {
    const [, maxY] = points[i];
    let minY = -Infinity;

    for (let j = i + 1; j < points.length; j++) {
      const [, y] = points[j];
      if (y <= maxY && y > minY) {
        let isValid = true;
        for (let k = 0; k < points.length; k++) {
          if (k !== i && k !== j) {
            const [x, ky] = points[k];
            if (x >= points[i][0] && x <= points[j][0]
                && ky <= points[i][1] && ky >= points[j][1]) {
              isValid = false;
              break;
            }
          }
        }
        if (isValid) {
          result++;
          minY = y;
        }
      }
    }
  }

  return result;
};
