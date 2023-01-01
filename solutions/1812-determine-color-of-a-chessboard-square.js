/**
 * 1812. Determine Color of a Chessboard Square
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/
 * Difficulty: Easy
 *
 * You are given coordinates, a string that represents the coordinates of a square of
 * the chessboard. Below is a chessboard for your reference.
 *
 * Return true if the square is white, and false if the square is black.
 *
 * The coordinate will always represent a valid chessboard square. The coordinate will
 * always have the letter first, and the number second.
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  const [x, y] = coordinates;
  return (x.charCodeAt() + +y) % 2 !== 0;
};
