/**
 * 850. Rectangle Area II
 * https://leetcode.com/problems/rectangle-area-ii/
 * Difficulty: Hard
 *
 * You are given a 2D array of axis-aligned rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2]
 * denotes the ith rectangle where (xi1, yi1) are the coordinates of the bottom-left corner, and
 * (xi2, yi2) are the coordinates of the top-right corner.
 *
 * Calculate the total area covered by all rectangles in the plane. Any area covered by two or more
 * rectangles should only be counted once.
 *
 * Return the total area. Since the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
  const MOD = 1e9 + 7;
  const events = [];
  const xCoords = new Set();
  const yCoords = new Set();

  for (const [x1, y1, x2, y2] of rectangles) {
    xCoords.add(x1);
    xCoords.add(x2);
    yCoords.add(y1);
    yCoords.add(y2);
    events.push([x1, 1, y1, y2]);
    events.push([x2, -1, y1, y2]);
  }

  const xArray = [...xCoords].sort((a, b) => a - b);
  const yArray = [...yCoords].sort((a, b) => a - b);

  const xMap = new Map();
  const yMap = new Map();

  for (let i = 0; i < xArray.length; i++) {
    xMap.set(xArray[i], i);
  }

  for (let i = 0; i < yArray.length; i++) {
    yMap.set(yArray[i], i);
  }

  const grid = Array(xArray.length).fill(0).map(() => Array(yArray.length).fill(0));

  for (const [x1, y1, x2, y2] of rectangles) {
    for (let x = xMap.get(x1); x < xMap.get(x2); x++) {
      for (let y = yMap.get(y1); y < yMap.get(y2); y++) {
        grid[x][y] = 1;
      }
    }
  }

  let totalArea = 0;

  for (let x = 0; x < xArray.length - 1; x++) {
    for (let y = 0; y < yArray.length - 1; y++) {
      if (grid[x][y]) {
        const width = xArray[x + 1] - xArray[x];
        const height = yArray[y + 1] - yArray[y];
        totalArea = (totalArea + width * height) % MOD;
      }
    }
  }

  return totalArea;
};
