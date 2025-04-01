/**
 * 1034. Coloring A Border
 * https://leetcode.com/problems/coloring-a-border/
 * Difficulty: Medium
 *
 * You are given an m x n integer matrix grid, and three integers row, col, and color. Each value
 * in the grid represents the color of the grid square at that location.
 *
 * Two squares are called adjacent if they are next to each other in any of the 4 directions.
 *
 * Two squares belong to the same connected component if they have the same color and they are
 * adjacent.
 *
 * The border of a connected component is all the squares in the connected component that are
 * either adjacent to (at least) a square not in the component, or on the boundary of the grid
 * (the first or last row or column).
 *
 * You should color the border of the connected component that contains the square grid[row][col]
 * with color.
 *
 * Return the final grid.
 */

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  const originalColor = grid[row][col];
  const borders = new Set();

  function findBorders(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols
        || visited.has(`${r},${c}`) || grid[r][c] !== originalColor) {
      return;
    }

    visited.add(`${r},${c}`);

    if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1
        || (r > 0 && grid[r - 1][c] !== originalColor)
        || (r < rows - 1 && grid[r + 1][c] !== originalColor)
        || (c > 0 && grid[r][c - 1] !== originalColor)
        || (c < cols - 1 && grid[r][c + 1] !== originalColor)) {
      borders.add(`${r},${c}`);
    }

    findBorders(r - 1, c);
    findBorders(r + 1, c);
    findBorders(r, c - 1);
    findBorders(r, c + 1);
  }

  findBorders(row, col);
  borders.forEach(pos => {
    const [r, c] = pos.split(',').map(Number);
    grid[r][c] = color;
  });

  return grid;
};
