/**
 * 675. Cut Off Trees for Golf Event
 * https://leetcode.com/problems/cut-off-trees-for-golf-event/
 * Difficulty: Hard
 *
 * You are asked to cut off all the trees in a forest for a golf event. The forest is represented
 * as an m x n matrix. In this matrix:
 * - 0 means the cell cannot be walked through.
 * - 1 represents an empty cell that can be walked through.
 * - A number greater than 1 represents a tree in a cell that can be walked through, and this number
 *   is the tree's height.
 *
 * In one step, you can walk in any of the four directions: north, east, south, and west. If you are
 * standing in a cell with a tree, you can choose whether to cut it off.
 *
 * You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value
 * at its cell becomes 1 (an empty cell).
 *
 * Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the
 * trees. If you cannot cut off all the trees, return -1.
 *
 * Note: The input is generated such that no two trees have the same height, and there is at least
 * one tree needs to be cut off.
 */

/**
 * @param {number[][]} forest
 * @return {number}
 */
const cutOffTree = (forest) => {
  const treeHeights = forest.flat().filter((height) => height > 1).sort((a, b) => a - b);
  let currentPosition = [0, 0];
  let totalDistance = 0;

  while (treeHeights.length) {
    const gridCopy = forest.map((row) => [...row]);
    const result = findDistance(currentPosition, treeHeights.shift(), gridCopy);
    if (result === null) return -1;
    const [nextPosition, distance] = result;
    currentPosition = nextPosition;
    totalDistance += distance;
  }
  return totalDistance;

  function findDistance(startPosition, targetHeight, grid) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [startPosition];
    let distance = 0;

    while (queue.length) {
      const nextLevel = [];

      for (const [row, col] of queue) {
        if (grid[row][col] === targetHeight) return [[row, col], distance];
        if (!grid[row][col]) continue;

        for (const [deltaRow, deltaCol] of directions) {
          const newRow = row + deltaRow;
          const newCol = col + deltaCol;
          if (
            newRow >= 0 && newRow < grid.length && newCol >= 0
            && newCol < grid[0].length && grid[newRow][newCol]
          ) {
            nextLevel.push([newRow, newCol]);
          }
        }
        grid[row][col] = 0;
      }
      distance += 1;
      queue = nextLevel;
    }
    return null;
  }
};
