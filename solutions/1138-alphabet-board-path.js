/**
 * 1138. Alphabet Board Path
 * https://leetcode.com/problems/alphabet-board-path/
 * Difficulty: Medium
 *
 * On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].
 *
 * Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.
 *
 * We may make the following moves:
 * - 'U' moves our position up one row, if the position exists on the board;
 * - 'D' moves our position down one row, if the position exists on the board;
 * - 'L' moves our position left one column, if the position exists on the board;
 * - 'R' moves our position right one column, if the position exists on the board;
 * - '!' adds the character board[r][c] at our current position (r, c) to the answer.
 *
 * (Here, the only positions that exist on the board are positions with letters on them.)
 *
 * Return a sequence of moves that makes our answer equal to target in the minimum number of
 * moves. You may return any path that does so.
 */

/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  let path = '';
  let row = 0;
  let col = 0;

  for (const char of target) {
    const code = char.charCodeAt(0) - 97;
    const targetRow = Math.floor(code / 5);
    const targetCol = code % 5;

    while (row > targetRow) path += 'U', row--;
    while (col > targetCol) path += 'L', col--;
    while (row < targetRow) path += 'D', row++;
    while (col < targetCol) path += 'R', col++;

    path += '!';
  }

  return path;
};
