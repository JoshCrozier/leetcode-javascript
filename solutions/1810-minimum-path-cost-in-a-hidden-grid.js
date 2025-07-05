/**
 * 1810. Minimum Path Cost in a Hidden Grid
 * https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/
 * Difficulty: Medium
 *
 * This is an interactive problem.
 *
 * There is a robot in a hidden grid, and you are trying to get it from its starting cell to the
 * target cell in this grid. The grid is of size m x n, and each cell in the grid is either empty
 * or blocked. It is guaranteed that the starting cell and the target cell are different, and
 * neither of them is blocked.
 *
 * Each cell has a cost that you need to pay each time you move to the cell. The starting cell's
 * cost is not applied before the robot moves.
 *
 * You want to find the minimum total cost to move the robot to the target cell. However, you do
 * not know the grid's dimensions, the starting cell, nor the target cell. You are only allowed
 * to ask queries to the GridMaster object.
 *
 * The GridMaster class has the following functions:
 * - boolean canMove(char direction) Returns true if the robot can move in that direction.
 *   Otherwise, it returns false.
 * - int move(char direction) Moves the robot in that direction and returns the cost of moving
 *   to that cell. If this move would move the robot to a blocked cell or off the grid, the move
 *   will be ignored, the robot will remain in the same position, and the function will return -1.
 * - boolean isTarget() Returns true if the robot is currently on the target cell. Otherwise, it
 *   returns false.
 *
 * Note that direction in the above functions should be a character from {'U','D','L','R'},
 * representing the directions up, down, left, and right, respectively.
 *
 * Return the minimum total cost to get the robot from its initial starting cell to the target
 * cell. If there is no valid path between the cells, return -1.
 *
 * Custom testing:
 *
 * The test input is read as a 2D matrix grid of size m x n and four integers r1, c1, r2, and
 * c2 where:
 * - grid[i][j] == 0 indicates that the cell (i, j) is blocked.
 * - grid[i][j] >= 1 indicates that the cell (i, j) is empty and grid[i][j] is the cost to move
 *   to that cell.
 * - (r1, c1) is the starting cell of the robot.
 * - (r2, c2) is the target cell of the robot.
 *
 * Remember that you will not have this information in your code.
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
 *     @return {integer}
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
  const directions = ['U', 'D', 'L', 'R'];
  const opposites = { 'U': 'D', 'D': 'U', 'L': 'R', 'R': 'L' };
  const deltas = { 'U': [-1, 0], 'D': [1, 0], 'L': [0, -1], 'R': [0, 1] };
  const visited = new Set();
  const cellCosts = new Map();
  let targetPosition = null;

  cellCosts.set('0,0', 0);
  dfs(0, 0);

  if (!targetPosition) return -1;

  const dijkstraVisited = new Set();
  const priorityQueue = new PriorityQueue((a, b) => a[2] - b[2]);
  priorityQueue.enqueue([0, 0, 0]);

  while (!priorityQueue.isEmpty()) {
    const [currentRow, currentCol, currentCost] = priorityQueue.dequeue();
    const currentKey = `${currentRow},${currentCol}`;

    if (dijkstraVisited.has(currentKey)) continue;
    dijkstraVisited.add(currentKey);

    if (currentRow === targetPosition[0] && currentCol === targetPosition[1]) {
      return currentCost;
    }

    for (const direction of directions) {
      const [deltaRow, deltaCol] = deltas[direction];
      const nextRow = currentRow + deltaRow;
      const nextCol = currentCol + deltaCol;
      const nextKey = `${nextRow},${nextCol}`;

      if (cellCosts.has(nextKey) && !dijkstraVisited.has(nextKey)) {
        const nextCost = currentCost + cellCosts.get(nextKey);
        priorityQueue.enqueue([nextRow, nextCol, nextCost]);
      }
    }
  }

  return -1;

  function dfs(row, col) {
    const key = `${row},${col}`;
    if (visited.has(key)) return;

    visited.add(key);

    if (master.isTarget()) {
      targetPosition = [row, col];
    }

    for (const direction of directions) {
      if (master.canMove(direction)) {
        const cost = master.move(direction);
        if (cost !== -1) {
          const [deltaRow, deltaCol] = deltas[direction];
          const newRow = row + deltaRow;
          const newCol = col + deltaCol;
          const newKey = `${newRow},${newCol}`;

          if (!cellCosts.has(newKey)) {
            cellCosts.set(newKey, cost);
          }

          dfs(newRow, newCol);

          master.move(opposites[direction]);
        }
      }
    }
  }
};
