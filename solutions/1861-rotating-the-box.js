/**
 * 1861. Rotating the Box
 * https://leetcode.com/problems/rotating-the-box/
 * Difficulty: Medium
 *
 * You are given an m x n matrix of characters boxGrid representing a side-view of a box.
 * Each cell of the box is one of the following:
 * - A stone '#'
 * - A stationary obstacle '*'
 * - Empty '.'
 *
 * The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity.
 * Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box.
 * Gravity does not affect the obstacles' positions, and the inertia from the box's rotation
 * does not affect the stones' horizontal positions.
 *
 * It is guaranteed that each stone in boxGrid rests on an obstacle, another stone, or the
 * bottom of the box.
 *
 * Return an n x m matrix representing the box after the rotation described above.
 */

/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
  const rows = boxGrid.length;
  const cols = boxGrid[0].length;
  const result = Array.from({ length: cols }, () => new Array(rows).fill('.'));

  for (let row = 0; row < rows; row++) {
    let freePosition = cols - 1;
    for (let col = cols - 1; col >= 0; col--) {
      if (boxGrid[row][col] === '*') {
        result[col][rows - 1 - row] = '*';
        freePosition = col - 1;
      } else if (boxGrid[row][col] === '#') {
        result[freePosition][rows - 1 - row] = '#';
        freePosition--;
      }
    }
  }

  return result;
};
