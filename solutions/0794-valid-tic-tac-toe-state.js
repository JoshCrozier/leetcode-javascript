/**
 * 794. Valid Tic-Tac-Toe State
 * https://leetcode.com/problems/valid-tic-tac-toe-state/
 * Difficulty: Medium
 *
 * Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible
 * to reach this board position during the course of a valid tic-tac-toe game.
 *
 * The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character
 * represents an empty square.
 *
 * Here are the rules of Tic-Tac-Toe:
 * - Players take turns placing characters into empty squares ' '.
 * - The first player always places 'X' characters, while the second player always places 'O'
 *   characters.
 * - 'X' and 'O' characters are always placed into empty squares, never filled ones.
 * - The game ends when there are three of the same (non-empty) character filling any row,
 *   column, or diagonal.
 * - The game also ends if all squares are non-empty.
 * - No more moves can be played if the game is over.
 */

/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  let xCount = 0;
  let oCount = 0;

  for (const row of board) {
    for (const cell of row) {
      if (cell === 'X') xCount++;
      if (cell === 'O') oCount++;
    }
  }

  if (xCount !== oCount && xCount !== oCount + 1) return false;

  const hasWon = player => {
    for (let i = 0; i < 3; i++) {
      if (board[i] === player.repeat(3)) return true;
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
    }

    return (board[0][0] === player && board[1][1] === player && board[2][2] === player)
      || (board[0][2] === player && board[1][1] === player && board[2][0] === player);
  };

  const xWin = hasWon('X');
  const oWin = hasWon('O');

  if (xWin && xCount !== oCount + 1) return false;
  if (oWin && xCount !== oCount) return false;
  if (xWin && oWin) return false;

  return true;
};
