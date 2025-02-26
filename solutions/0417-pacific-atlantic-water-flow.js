/**
 * 417. Pacific Atlantic Water Flow
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 * Difficulty: Medium
 *
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
 * The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches
 * the island's right and bottom edges.
 *
 * The island is partitioned into a grid of square cells. You are given an m x n integer
 * matrix heights where heights[r][c] represents the height above sea level of the cell
 * at coordinate (r, c).
 *
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly
 * north, south, east, and west if the neighboring cell's height is less than or equal to the
 * current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
 *
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water
 * can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const result = [];
  const pacific = new Set();
  const atlantic = new Set();

  for (let i = 0; i < heights.length; i++) {
    dfs(i, 0, pacific);
    dfs(i, heights[0].length - 1, atlantic);
  }
  for (let j = 0; j < heights[0].length; j++) {
    dfs(0, j, pacific);
    dfs(heights.length - 1, j, atlantic);
  }

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      const key = `${i},${j}`;
      if (pacific.has(key) && atlantic.has(key)) {
        result.push([i, j]);
      }
    }
  }

  return result;

  function dfs(r, c, ocean) {
    const key = `${r},${c}`;
    if (ocean.has(key)) return;
    ocean.add(key);

    [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
      if (nr >= 0 && nr < heights.length && nc >= 0 && nc < heights[0].length
        && heights[nr][nc] >= heights[r][c]) {
        dfs(nr, nc, ocean);
      }
    });
  }
};
