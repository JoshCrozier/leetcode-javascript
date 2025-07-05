/**
 * 1778. Shortest Path in a Hidden Grid
 * https://leetcode.com/problems/shortest-path-in-a-hidden-grid/
 * Difficulty: Medium
 *
 * This is an interactive problem.
 *
 * There is a robot in a hidden grid, and you are trying to get it from its starting cell to the
 * target cell in this grid. The grid is of size m x n, and each cell in the grid is either empty
 * or blocked. It is guaranteed that the starting cell and the target cell are different, and
 * neither of them is blocked.
 *
 * You want to find the minimum distance to the target cell. However, you do not know the grid's
 * dimensions, the starting cell, nor the target cell. You are only allowed to ask queries to the
 * GridMaster object.
 *
 * The GridMaster class has the following functions:
 * - boolean canMove(char direction) Returns true if the robot can move in that direction.
 *   Otherwise, it returns false.
 * - void move(char direction) Moves the robot in that direction. If this move would move the
 *   robot to a blocked cell or off the grid, the move will be ignored, and the robot will
 *   remain in the same position.
 * - boolean isTarget() Returns true if the robot is currently on the target cell. Otherwise,
 *   it returns false.
 *
 * Note that direction in the above functions should be a character from {'U','D','L','R'},
 * representing the directions up, down, left, and right, respectively.
 *
 * Return the minimum distance between the robot's initial starting cell and the target cell.
 * If there is no valid path between the cells, return -1.
 *
 * Custom testing:
 *
 * The test input is read as a 2D matrix grid of size m x n where:
 * - grid[i][j] == -1 indicates that the robot is in cell (i, j) (the starting cell).
 * - grid[i][j] == 0 indicates that the cell (i, j) is blocked.
 * - grid[i][j] == 1 indicates that the cell (i, j) is empty.
 * - grid[i][j] == 2 indicates that the cell (i, j) is the target cell.
 *
 * There is exactly one -1 and 2 in grid. Remember that you will not have this information
 * in your code.
 */

/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * function GridMaster() {
 *
 *     @param {character} direction
 *     @return {boolean}
 *     this.canMove = function(direction) {
 *         ...
 *     };
 *     @param {character} direction
 *     @return {void}
 *     this.move = function(direction) {
 *         ...
 *     };
 *     @return {boolean}
 *     this.isTarget = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {GridMaster} master
 * @return {integer}
 */
var findShortestPath = function(master) {
  const directions = [
    ['U', 'D', 0, -1],
    ['D', 'U', 0, 1],
    ['L', 'R', -1, 0],
    ['R', 'L', 1, 0]
  ];

  const visited = new Set();
  let targetPosition = null;

  dfs(0, 0);

  if (!targetPosition) return -1;

  const queue = [[0, 0, 0]];
  const bfsVisited = new Set(['0,0']);

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    if (x === targetPosition[0] && y === targetPosition[1]) {
      return distance;
    }

    for (const [, , dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const key = `${newX},${newY}`;

      if (!bfsVisited.has(key) && visited.has(key)) {
        bfsVisited.add(key);
        queue.push([newX, newY, distance + 1]);
      }
    }
  }

  return -1;

  function dfs(x, y) {
    const key = `${x},${y}`;
    if (visited.has(key)) return;
    visited.add(key);

    if (master.isTarget()) {
      targetPosition = [x, y];
      return;
    }

    for (const [moveDir, backDir, dx, dy] of directions) {
      if (master.canMove(moveDir)) {
        master.move(moveDir);
        dfs(x + dx, y + dy);
        master.move(backDir);
      }
    }
  }
};
