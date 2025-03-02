/**
 * 909. Snakes and Ladders
 * https://leetcode.com/problems/snakes-and-ladders/
 * Difficulty: Medium
 *
 * You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a
 * Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and
 * alternating direction each row.
 *
 * You start on square 1 of the board. In each move, starting from square curr, do the following:
 * - Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
 *   - This choice simulates the result of a standard 6-sided die roll: i.e., there are always at
 *     most 6 destinations, regardless of the size of the board.
 * - If next has a snake or ladder, you must move to the destination of that snake or ladder.
 *   Otherwise, you move to next.
 * - The game ends when you reach the square n2.
 *
 * A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination
 * of that snake or ladder is board[r][c]. Squares 1 and n2 are not the starting points of any
 * snake or ladder.
 *
 * Note that you only take a snake or ladder at most once per dice roll. If the destination to a
 * snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake
 * or ladder.
 *
 * - For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination
 *   square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
 *
 * Return the least number of dice rolls required to reach the square n2. If it is not possible to
 * reach the square, return -1.
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  const target = board.length * board.length;
  const queue = [1];
  const seen = new Set([1]);
  let moves = 0;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current === target) return moves;
      for (let dice = 1; dice <= 6 && current + dice <= target; dice++) {
        const next = current + dice;
        const [r, c] = getCoordinates(next);
        const destination = board[r][c] === -1 ? next : board[r][c];
        if (!seen.has(destination)) {
          seen.add(destination);
          queue.push(destination);
        }
      }
    }
    moves++;
  }

  return -1;

  function getCoordinates(square) {
    const r = board.length - 1 - Math.floor((square - 1) / board.length);
    const c = (board.length - 1 - r) % 2 === 0
      ? (square - 1) % board.length
      : board.length - 1 - (square - 1) % board.length;
    return [r, c];
  }
};
