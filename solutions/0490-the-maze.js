/**
 * 490. The Maze
 * https://leetcode.com/problems/the-maze/
 * Difficulty: Medium
 *
 * There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1).
 * The ball can go through the empty spaces by rolling up, down, left or right, but it won't
 * stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
 *
 * Given the m x n maze, the ball's start position and the destination, where
 * start = [startrow, startcol] and destination = [destinationrow, destinationcol],
 * return true if the ball can stop at the destination, otherwise return false.
 *
 * You may assume that the borders of the maze are all walls (see examples).
 */

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited = new Set();
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  return helper(start[0], start[1]);

  function helper(row, col) {
    if (visited.has(`${row},${col}`)) return false;
    visited.add(`${row},${col}`);

    if (row === destination[0] && col === destination[1]) return true;

    for (const [dr, dc] of directions) {
      let newRow = row;
      let newCol = col;

      while (newRow + dr >= 0 && newRow + dr < rows && newCol + dc >= 0 && newCol + dc < cols
             && maze[newRow + dr][newCol + dc] === 0) {
        newRow += dr;
        newCol += dc;
      }

      if (helper(newRow, newCol)) return true;
    }

    return false;
  }
};
