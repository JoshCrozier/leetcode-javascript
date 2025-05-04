/**
 * 1958. Check if Move is Legal
 * https://leetcode.com/problems/check-if-move-is-legal/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 8 x 8 grid board, where board[r][c] represents the cell (r, c) on a
 * game board. On the board, free cells are represented by '.', white cells are represented by
 * 'W', and black cells are represented by 'B'.
 *
 * Each move in this game consists of choosing a free cell and changing it to the color you are
 * playing as (either white or black). However, a move is only legal if, after changing it, the
 * cell becomes the endpoint of a good line (horizontal, vertical, or diagonal).
 *
 * A good line is a line of three or more cells (including the endpoints) where the endpoints of
 * the line are one color, and the remaining cells in the middle are the opposite color (no cells
 * in the line are free). You can find examples for good lines in the figure below.
 *
 * Given two integers rMove and cMove and a character color representing the color you are playing
 * as (white or black), return true if changing cell (rMove, cMove) to color color is a legal move,
 * or false if it is not legal.
 */

/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
  const opposite = color === 'B' ? 'W' : 'B';
  const directions = [
    [0, 1], [0, -1], [1, 0], [-1, 0],
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  for (const [dr, dc] of directions) {
    let row = rMove + dr;
    let col = cMove + dc;
    let count = 1;

    while (row >= 0 && row < 8 && col >= 0 && col < 8 && board[row][col] === opposite) {
      row += dr;
      col += dc;
      count++;
    }

    if (count >= 2 && row >= 0 && row < 8 && col >= 0 && col < 8 && board[row][col] === color) {
      return true;
    }
  }

  return false;
};
