/**
 * 302. Smallest Rectangle Enclosing Black Pixels
 * https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/
 * Difficulty: Hard
 *
 * You are given an m x n binary matrix image where 0 represents a white pixel and 1 represents
 * a black pixel.
 *
 * The black pixels are connected (i.e., there is only one black region). Pixels are connected
 * horizontally and vertically.
 *
 * Given two integers x and y that represents the location of one of the black pixels, return
 * the area of the smallest (axis-aligned) rectangle that encloses all black pixels.
 *
 * You must write an algorithm with less than O(mn) runtime complexity
 */

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
  const rows = image.length;
  const cols = image[0].length;
  const top = binarySearch(0, x, true, true);
  const bottom = binarySearch(x, rows - 1, true, false);
  const left = binarySearch(0, y, false, true);
  const right = binarySearch(y, cols - 1, false, false);

  return (bottom - top + 1) * (right - left + 1);

  function binarySearch(start, end, isRow, isMin) {
    let result = isMin ? end : start;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      let hasBlack = false;
      for (let i = 0; i < (isRow ? cols : rows); i++) {
        const pixel = isRow ? image[mid][i] : image[i][mid];
        if (pixel === '1') {
          hasBlack = true;
          break;
        }
      }
      if (hasBlack) {
        result = mid;
        if (isMin) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if (isMin) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return result;
  }
};
