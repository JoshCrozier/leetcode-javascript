/**
 * 3279. Maximum Total Area Occupied by Pistons
 * https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/
 * Difficulty: Hard
 *
 * There are several pistons in an old car engine, and we want to calculate the maximum
 * possible area under the pistons.
 *
 * You are given:
 * - An integer height, representing the maximum height a piston can reach.
 * - An integer array positions, where positions[i] is the current position of piston i,
 *   which is equal to the current area under it.
 * - A string directions, where directions[i] is the current moving direction of piston
 *   i, 'U' for up, and 'D' for down.
 *
 * Each second:
 * - Every piston moves in its current direction 1 unit. e.g., if the direction is up,
 *   positions[i] is incremented by 1.
 * - If a piston has reached one of the ends, i.e., positions[i] == 0 or
 *   positions[i] == height, its direction will change.
 *
 * Return the maximum possible area under all the pistons.
 */

/**
 * @param {number} height
 * @param {number[]} positions
 * @param {string} directions
 * @return {number}
 */
var maxArea = function(height, positions, directions) {
  const n = directions.length;
  let upCount = directions.split('').filter(dir => dir === 'U').length;
  let result = positions.reduce((sum, pos) => sum + pos, 0);
  let currentArea = result;
  const vertices = new Map();
  vertices.set(0, 0);

  for (let i = 0; i < n; i++) {
    const direction = directions[i];
    const position = positions[i];

    if (direction === 'U') {
      vertices.set(height - position, (vertices.get(height - position) || 0) - 1);
      vertices.set(2 * height - position, (vertices.get(2 * height - position) || 0) + 1);
    } else {
      vertices.set(height + position, (vertices.get(height + position) || 0) - 1);
      vertices.set(position, (vertices.get(position) || 0) + 1);
    }
  }

  const sortedTimes = Array.from(vertices.keys()).sort((a, b) => a - b);
  for (let i = 0; i < sortedTimes.length - 1; i++) {
    const leftTime = sortedTimes[i];
    const rightTime = sortedTimes[i + 1];

    currentArea += (rightTime - leftTime) * (2 * upCount - n);
    if (currentArea > result) {
      result = currentArea;
    }
    upCount += vertices.get(rightTime) || 0;
  }

  return result;
};
