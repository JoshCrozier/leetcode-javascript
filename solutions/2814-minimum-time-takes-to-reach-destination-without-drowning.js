/**
 * 2814. Minimum Time Takes to Reach Destination Without Drowning
 * https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/
 * Difficulty: Hard
 *
 * You are given an n * m 0-indexed grid of string land. Right now, you are standing at the cell
 * that contains "S", and you want to get to the cell containing "D". There are three other types
 * of cells in this land:
 * - ".": These cells are empty.
 * - "X": These cells are stone.
 * - "*": These cells are flooded.
 *
 * At each second, you can move to a cell that shares a side with your current cell (if it exists).
 * Also, at each second, every empty cell that shares a side with a flooded cell becomes flooded
 * as well.
 *
 * There are two problems ahead of your journey:
 * - You can't step on stone cells.
 * - You can't step on flooded cells since you will drown (also, you can't step on a cell that will
 *   be flooded at the same time as you step on it).
 *
 * Return the minimum time it takes you to reach the destination in seconds, or -1 if it is
 * impossible.
 *
 * Note that the destination will never be flooded.
 */

/**
 * @param {string[][]} land
 * @return {number}
 */
var minimumSeconds = function(land) {
  const rows = land.length;
  const cols = land[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const floodQueue = [];
  const startQueue = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (land[i][j] === 'S') {
        startQueue.push([i, j]);
      } else if (land[i][j] === '*') {
        floodQueue.push([i, j]);
      }
    }
  }

  let time = 0;

  while (startQueue.length > 0) {
    time++;

    const floodSize = floodQueue.length;
    for (let f = 0; f < floodSize; f++) {
      const [i, j] = floodQueue.shift();
      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;
        if (isValidPosition(x, y) && land[x][y] === '.') {
          land[x][y] = '*';
          floodQueue.push([x, y]);
        }
      }
    }

    const startSize = startQueue.length;
    for (let s = 0; s < startSize; s++) {
      const [i, j] = startQueue.shift();
      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;
        if (isValidPosition(x, y)) {
          if (land[x][y] === 'D') {
            return time;
          } else if (land[x][y] === '.') {
            land[x][y] = 'S';
            startQueue.push([x, y]);
          }
        }
      }
    }
  }

  return -1;

  function isValidPosition(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }
};
