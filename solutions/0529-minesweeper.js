/**
 * 529. Minesweeper
 * https://leetcode.com/problems/minesweeper/
 * Difficulty: Medium
 *
 * Let's play the minesweeper game (Wikipedia, online game)!
 *
 * You are given an m x n char matrix board representing the game board where:
 * - 'M' represents an unrevealed mine,
 * - 'E' represents an unrevealed empty square,
 * - 'B' represents a revealed blank square that has no adjacent mines (i.e., above, below,
 *   left, right, and all 4 diagonals),
 * - digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
 * - 'X' represents a revealed mine.
 *
 * You are also given an integer array click where click = [clickr, clickc] represents the
 * next click position among all the unrevealed squares ('M' or 'E').
 *
 * Return the board after revealing this position according to the following rules:
 * 1. If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
 * 2. If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed
 *    blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
 * 3. If an empty square 'E' with at least one adjacent mine is revealed, then change it to a
 *    digit ('1' to '8') representing the number of adjacent mines.
 * 4. Return the board when no more squares will be revealed.
 */

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const [row, col] = click;
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
  ];

  if (board[row][col] === 'M') {
    board[row][col] = 'X';
    return board;
  }

  dfs(row, col);
  return board;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'E') return;

    let mines = 0;
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] === 'M') {
        mines++;
      }
    }

    board[r][c] = mines > 0 ? mines.toString() : 'B';
    if (mines === 0) {
      for (const [dr, dc] of directions) {
        dfs(r + dr, c + dc);
      }
    }
  }
};
