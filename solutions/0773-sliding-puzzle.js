/**
 * 773. Sliding Puzzle
 * https://leetcode.com/problems/sliding-puzzle/
 * Difficulty: Hard
 *
 * On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by
 * 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
 *
 * The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
 *
 * Given the puzzle board board, return the least number of moves required so that the state of the
 * board is solved. If it is impossible for the state of the board to be solved, return -1.
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const target = '123450';
  const moves = [
    [1, 3], [0, 2, 4], [1, 5],
    [0, 4], [1, 3, 5], [2, 4]
  ];

  const start = board.flat().join('');
  if (start === target) return 0;

  const queue = [[start, 0]];
  const seen = new Set([start]);

  while (queue.length) {
    const [state, steps] = queue.shift();
    const index = state.indexOf('0');

    for (const next of moves[index]) {
      const chars = state.split('');
      [chars[index], chars[next]] = [chars[next], chars[index]];
      const nextState = chars.join('');

      if (nextState === target) return steps + 1;

      if (!seen.has(nextState)) {
        seen.add(nextState);
        queue.push([nextState, steps + 1]);
      }
    }
  }

  return -1;
};
