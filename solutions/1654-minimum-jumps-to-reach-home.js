/**
 * 1654. Minimum Jumps to Reach Home
 * https://leetcode.com/problems/minimum-jumps-to-reach-home/
 * Difficulty: Medium
 *
 * A certain bug's home is on the x-axis at position x. Help them get there from position 0.
 *
 * The bug jumps according to the following rules:
 * - It can jump exactly a positions forward (to the right).
 * - It can jump exactly b positions backward (to the left).
 * - It cannot jump backward twice in a row.
 * - It cannot jump to any forbidden positions.
 *
 * The bug may jump forward beyond its home, but it cannot jump to positions numbered with
 * negative integers.
 *
 * Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to
 * the position forbidden[i], and integers a, b, and x, return the minimum number of jumps
 * needed for the bug to reach its home. If there is no possible sequence of jumps that lands
 * the bug on position x, return -1.
 */

/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
  const forbiddenSet = new Set(forbidden);
  const maxPosition = Math.max(x, Math.max(...forbidden)) + a + b;
  const queue = [[0, 0, false]];
  const visited = new Set([`0,false`]);

  while (queue.length) {
    const [position, jumps, isBackward] = queue.shift();

    if (position === x) return jumps;

    const forwardPosition = position + a;
    if (forwardPosition <= maxPosition && !forbiddenSet.has(forwardPosition)
        && !visited.has(`${forwardPosition},false`)) {
      queue.push([forwardPosition, jumps + 1, false]);
      visited.add(`${forwardPosition},false`);
    }

    if (!isBackward && b > 0) {
      const backwardPosition = position - b;
      if (backwardPosition >= 0 && !forbiddenSet.has(backwardPosition)
          && !visited.has(`${backwardPosition},true`)) {
        queue.push([backwardPosition, jumps + 1, true]);
        visited.add(`${backwardPosition},true`);
      }
    }
  }

  return -1;
};
