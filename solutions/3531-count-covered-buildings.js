/**
 * 3531. Count Covered Buildings
 * https://leetcode.com/problems/count-covered-buildings/
 * Difficulty: Medium
 *
 * You are given a positive integer n, representing an n x n city. You are also given
 * a 2D grid buildings, where buildings[i] = [x, y] denotes a unique building located
 * at coordinates [x, y].
 *
 * A building is covered if there is at least one building in all four directions:
 * left, right, above, and below.
 *
 * Return the number of covered buildings.
 */

/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
  const rowBuildings = new Map();
  const colBuildings = new Map();
  let result = 0;

  for (const [x, y] of buildings) {
    if (!rowBuildings.has(x)) rowBuildings.set(x, []);
    if (!colBuildings.has(y)) colBuildings.set(y, []);
    rowBuildings.get(x).push(y);
    colBuildings.get(y).push(x);
  }
  for (const coords of rowBuildings.values()) {
    coords.sort((a, b) => a - b);
  }
  for (const coords of colBuildings.values()) {
    coords.sort((a, b) => a - b);
  }
  for (const [x, y] of buildings) {
    const rowCoords = rowBuildings.get(x);
    const colCoords = colBuildings.get(y);
    const hasLeft = rowCoords[0] < y;
    const hasRight = rowCoords[rowCoords.length - 1] > y;
    const hasAbove = colCoords[0] < x;
    const hasBelow = colCoords[colCoords.length - 1] > x;

    if (hasLeft && hasRight && hasAbove && hasBelow) {
      result++;
    }
  }

  return result;
};
