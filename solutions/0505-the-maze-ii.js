/**
 * 505. The Maze II
 * https://leetcode.com/problems/the-maze-ii/
 * Difficulty: Medium
 *
 * There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1).
 * The ball can go through the empty spaces by rolling up, down, left or right, but it won't
 * stop rolling until hitting a wall. When the ball stops, it could choose the next direction.
 *
 * Given the m x n maze, the ball's start position and the destination, where
 * start = [startrow, startcol] and destination = [destinationrow, destinationcol], return
 * the shortest distance for the ball to stop at the destination. If the ball cannot stop
 * at destination, return -1.
 *
 * The distance is the number of empty spaces traveled by the ball from the start position
 * (excluded) to the destination (included).
 *
 * You may assume that the borders of the maze are all walls (see examples).
 */

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
  const rows = maze.length;
  const cols = maze[0].length;
  const distances = new Array(rows).fill().map(() => new Array(cols).fill(Infinity));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const queue = [[start[0], start[1], 0]];
  distances[start[0]][start[1]] = 0;

  while (queue.length) {
    const [row, col, distance] = queue.shift();
    if (distance > distances[row][col]) continue;

    for (const [dx, dy] of directions) {
      let nextRow = row;
      let nextCol = col;
      let steps = 0;

      while (nextRow + dx >= 0 && nextRow + dx < rows && nextCol + dy >= 0
            && nextCol + dy < cols && maze[nextRow + dx][nextCol + dy] === 0
      ) {
        nextRow += dx;
        nextCol += dy;
        steps++;
      }

      const newDistance = distance + steps;
      if (newDistance < distances[nextRow][nextCol]) {
        distances[nextRow][nextCol] = newDistance;
        queue.push([nextRow, nextCol, newDistance]);
      }
    }
  }

  const result = distances[destination[0]][destination[1]];
  return result === Infinity ? -1 : result;
};
