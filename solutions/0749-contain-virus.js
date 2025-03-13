/**
 * 749. Contain Virus
 * https://leetcode.com/problems/contain-virus/
 * Difficulty: Hard
 *
 * A virus is spreading rapidly, and your task is to quarantine the infected area by
 * installing walls.
 *
 * The world is modeled as an m x n binary grid isInfected, where isInfected[i][j] == 0
 * represents uninfected cells, and isInfected[i][j] == 1 represents cells contaminated
 * with the virus. A wall (and only one wall) can be installed between any two 4-directionally
 * adjacent cells, on the shared boundary.
 *
 * Every night, the virus spreads to all neighboring cells in all four directions unless
 * blocked by a wall. Resources are limited. Each day, you can install walls around only one
 * region (i.e., the affected area (continuous block of infected cells) that threatens the
 * most uninfected cells the following night). There will never be a tie.
 *
 * Return the number of walls used to quarantine all the infected regions. If the world will
 * become fully infected, return the number of walls used.
 */

/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function(isInfected) {
  const verticalBarriers = new Set();
  const horizontalBarriers = new Set();
  const grid = isInfected;
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[-1, 0, -cols, -cols], [1, 0, cols, 0], [0, -1, -1, -1], [0, 1, 1, 0]];
  let target;
  let nextState;
  let maxThreat;
  let threatenedCells;
  let nextVertical;
  let nextHorizontal;
  let verticalWalls;
  let horizontalWalls;
  let startRow;
  let startCol;

  while (true) {
    target = 1;
    nextState = 2;
    maxThreat = 0;
    grid.forEach((row, r) => row.forEach((cell, c) => cell && exploreRegion(r, c)));
    if (maxThreat === 0) return verticalBarriers.size + horizontalBarriers.size;
    target = 2;
    nextState = 0;
    traverseRegion(startRow, startCol);
    verticalWalls.forEach(pos => verticalBarriers.add(pos));
    horizontalWalls.forEach(pos => horizontalBarriers.add(pos));
    nextState = 1;
    threatenedCells = new Set();
    grid.forEach((row, r) => row.forEach((cell, c) => cell && traverseRegion(r, c)));
    threatenedCells.forEach(pos => grid[Math.floor(pos / cols)][pos % cols] = 1);
  }

  function exploreRegion(row, col) {
    threatenedCells = new Set();
    nextVertical = new Set();
    nextHorizontal = new Set();
    traverseRegion(row, col);
    if (threatenedCells.size < maxThreat) return;
    maxThreat = threatenedCells.size;
    verticalWalls = nextVertical;
    horizontalWalls = nextHorizontal;
    startRow = row;
    startCol = col;
  }

  function traverseRegion(row, col) {
    if (grid[row][col] !== target) return;
    grid[row][col] = nextState;
    const position = cols * row + col;
    for (let i = 0; i < 4; i++) {
      const [deltaRow, deltaCol, threatOffset, wallOffset] = directions[i];
      const newRow = row + deltaRow;
      const newCol = col + deltaCol;
      if (newRow < 0 || newRow === rows || newCol < 0 || newCol === cols) continue;
      traverseRegion(newRow, newCol);
      if (grid[newRow][newCol]
        || (deltaRow ? verticalBarriers : horizontalBarriers).has(position + wallOffset)) continue;
      if (nextState) threatenedCells.add(position + threatOffset);
      if (nextState > 1) (deltaRow ? nextVertical : nextHorizontal).add(position + wallOffset);
    }
  }
};
