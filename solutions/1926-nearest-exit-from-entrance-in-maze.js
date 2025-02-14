/**
 * 1926. Nearest Exit from Entrance in Maze
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 * Difficulty: Medium
 *
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and
 * walls (represented as '+'). You are also given the entrance of the maze, where entrance
 * = [entrancerow, entrancecol] denotes the row and column of the cell you are initially
 * standing at.
 *
 * In one step, you can move one cell up, down, left, or right. You cannot step into a cell
 * with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit
 * from the entrance. An exit is defined as an empty cell that is at the border of the maze.
 * The entrance does not count as an exit.
 *
 * Return the number of steps in the shortest path from the entrance to the nearest exit,
 * or -1 if no such path exists.
 */

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  const queue = [[entrance, 0]];

  while (queue.length) {
    const [cell, steps] = queue.shift();
    const [i, j] = cell;
    if (i === maze.length || i === -1 || j === maze[0].length || j === -1 || maze[i][j] !== '.') {
      continue;
    }
    if ((i === maze.length - 1 || i === 0 || j === maze[0].length - 1 || j === 0) && steps !== 0) {
      return steps;
    }
    maze[i][j] = '*';
    queue.push([[i, j + 1], steps + 1]);
    queue.push([[i, j - 1], steps + 1]);
    queue.push([[i + 1, j], steps + 1]);
    queue.push([[i - 1, j], steps + 1]);
  }

  return -1;
};
