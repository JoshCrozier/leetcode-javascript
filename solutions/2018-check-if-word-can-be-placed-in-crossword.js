/**
 * 2018. Check if Word Can Be Placed In Crossword
 * https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/
 * Difficulty: Medium
 *
 * You are given an m x n matrix board, representing the current state of a crossword puzzle.
 * The crossword contains lowercase English letters (from solved words), ' ' to represent any
 * empty cells, and '#' to represent any blocked cells.
 *
 * A word can be placed horizontally (left to right or right to left) or vertically (top to
 * bottom or bottom to top) in the board if:
 * - It does not occupy a cell containing the character '#'.
 * - The cell each letter is placed in must either be ' ' (empty) or match the letter already
 *   on the board.
 * - There must not be any empty cells ' ' or other lowercase letters directly left or right
 *   of the word if the word was placed horizontally.
 * - There must not be any empty cells ' ' or other lowercase letters directly above or below
 *   the word if the word was placed vertically.
 *
 * Given a string word, return true if word can be placed in board, or false otherwise.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const wordLen = word.length;

  function canPlace(row, col, dr, dc) {
    for (let i = 0; i < wordLen; i++) {
      const r = row + i * dr;
      const c = col + i * dc;
      if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === '#') return false;
      if (board[r][c] !== ' ' && board[r][c] !== word[i]) return false;
    }

    const beforeR = row - dr;
    const beforeC = col - dc;
    const afterR = row + wordLen * dr;
    const afterC = col + wordLen * dc;

    if ((beforeR >= 0 && beforeR < rows && beforeC >= 0
        && beforeC < cols && board[beforeR][beforeC] !== '#')
        || (afterR >= 0 && afterR < rows && afterC >= 0
           && afterC < cols && board[afterR][afterC] !== '#')) {
      return false;
    }

    return true;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (canPlace(r, c, 0, 1) || canPlace(r, c, 0, -1)
          || canPlace(r, c, 1, 0) || canPlace(r, c, -1, 0)) {
        return true;
      }
    }
  }

  return false;
};
