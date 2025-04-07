/**
 * 1275. Find Winner on a Tic Tac Toe Game
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
 * Difficulty: Easy
 *
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:
 * - Players take turns placing characters into empty squares ' '.
 * - The first player A always places 'X' characters, while the second player B always places
 *   'O' characters.
 * - 'X' and 'O' characters are always placed into empty squares, never on filled ones.
 * - The game ends when there are three of the same (non-empty) character filling any row,
 *   column, or diagonal.
 * - The game also ends if all squares are non-empty.
 * - No more moves can be played if the game is over.
 *
 * Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move
 * will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B).
 * In case the game ends in a draw return "Draw". If there are still movements to play return
 * "Pending".
 *
 * You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is
 * initially empty, and A will play first.
 */

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const rows = new Array(3).fill(0);
  const cols = new Array(3).fill(0);
  let diagonal = 0;
  let antiDiagonal = 0;

  for (let i = 0; i < moves.length; i++) {
    const value = i % 2 === 0 ? 1 : -1;
    const [row, col] = moves[i];

    rows[row] += value;
    cols[col] += value;
    if (row === col) diagonal += value;
    if (row + col === 2) antiDiagonal += value;

    if ([rows[row], cols[col], diagonal, antiDiagonal].includes(3)) return 'A';
    if ([rows[row], cols[col], diagonal, antiDiagonal].includes(-3)) return 'B';
  }

  return moves.length === 9 ? 'Draw' : 'Pending';
};
