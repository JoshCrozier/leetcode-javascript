/**
 * 2056. Number of Valid Move Combinations On Chessboard
 * https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/
 * Difficulty: Hard
 *
 * There is an 8 x 8 chessboard containing n pieces (rooks, queens, or bishops). You are given a
 * string array pieces of length n, where pieces[i] describes the type (rook, queen, or bishop)
 * of the ith piece. In addition, you are given a 2D integer array positions also of length n,
 * where positions[i] = [ri, ci] indicates that the ith piece is currently at the 1-based
 * coordinate (ri, ci) on the chessboard.
 *
 * When making a move for a piece, you choose a destination square that the piece will travel
 * toward and stop on.
 * - A rook can only travel horizontally or vertically from (r, c) to the direction of (r+1, c),
 *   (r-1, c), (r, c+1), or (r, c-1).
 * - A queen can only travel horizontally, vertically, or diagonally from (r, c) to the direction
 *   of (r+1, c), (r-1, c), (r, c+1), (r, c-1), (r+1, c+1), (r+1, c-1), (r-1, c+1), (r-1, c-1).
 * - A bishop can only travel diagonally from (r, c) to the direction of (r+1, c+1), (r+1, c-1),
 *   (r-1, c+1), (r-1, c-1).
 *
 * You must make a move for every piece on the board simultaneously. A move combination consists of
 * all the moves performed on all the given pieces. Every second, each piece will instantaneously
 * travel one square towards their destination if they are not already at it. All pieces start
 * traveling at the 0th second. A move combination is invalid if, at a given time, two or more
 * pieces occupy the same square.
 *
 * Return the number of valid move combinations.
 *
 * Notes:
 * - No two pieces will start in the same square.
 * - You may choose the square a piece is already on as its destination.
 * - If two pieces are directly adjacent to each other, it is valid for them to move past each other
 *   and swap positions in one second.
 */

/**
 * @param {string[]} pieces
 * @param {number[][]} positions
 * @return {number}
 */
var countCombinations = function(pieces, positions) {
  const n = pieces.length;
  const directions = {
    rook: [[0, 1], [0, -1], [1, 0], [-1, 0]],
    bishop: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    queen: [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  };

  return generateCombinations(0, [], []);

  function isValidPosition(row, col) {
    return row >= 1 && row <= 8 && col >= 1 && col <= 8;
  }

  function simulateMoves(moves, steps) {
    const current = positions.map(([r, c]) => [r, c]);
    const maxSteps = Math.max(...steps);

    for (let t = 0; t <= maxSteps; t++) {
      const positionsAtTime = new Set();
      for (let i = 0; i < n; i++) {
        const [dr, dc] = moves[i];
        const step = Math.min(t, steps[i]);
        const newRow = current[i][0] + dr * step;
        const newCol = current[i][1] + dc * step;

        if (t > steps[i] && steps[i] > 0 && !isValidPosition(newRow, newCol)) continue;

        const posKey = `${newRow},${newCol}`;
        if (positionsAtTime.has(posKey)) return false;
        positionsAtTime.add(posKey);
      }
    }

    return true;
  }

  function generateCombinations(index, selectedMoves, selectedSteps) {
    if (index === n) {
      return simulateMoves(selectedMoves, selectedSteps) ? 1 : 0;
    }

    let total = 0;
    const [startRow, startCol] = positions[index];
    const pieceDirections = directions[pieces[index]];

    total += generateCombinations(index + 1, [...selectedMoves, [0, 0]], [...selectedSteps, 0]);

    for (const [dr, dc] of pieceDirections) {
      let row = startRow;
      let col = startCol;
      let step = 0;

      while (isValidPosition(row + dr, col + dc)) {
        row += dr;
        col += dc;
        step++;
        total += generateCombinations(
          index + 1,
          [...selectedMoves, [dr, dc]],
          [...selectedSteps, step]
        );
      }
    }

    return total;
  }
};
