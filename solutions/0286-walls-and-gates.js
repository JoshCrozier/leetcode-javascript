/**
 * 286. Walls and Gates
 * https://leetcode.com/problems/walls-and-gates/
 * Difficulty: Medium
 *
 * You are given an m x n grid rooms initialized with these three possible values.
 * - -1 A wall or an obstacle.
 * - 0 A gate.
 * - INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF
 *   as you may assume that the distance to a gate is less than 2147483647.
 *
 * Fill each empty room with the distance to its nearest gate. If it is impossible to reach
 * a gate, it should be filled with INF.
 */

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  const rows = rooms.length;
  const cols = rooms[0].length;
  const queue = [];
  const INF = 2147483647;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  while (queue.length) {
    const [row, col] = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
          && rooms[newRow][newCol] === INF) {
        rooms[newRow][newCol] = rooms[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }
};
