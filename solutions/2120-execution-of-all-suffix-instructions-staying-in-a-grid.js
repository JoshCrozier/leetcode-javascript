/**
 * 2120. Execution of All Suffix Instructions Staying in a Grid
 * https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
 * Difficulty: Medium
 *
 * There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at
 * (n - 1, n - 1). You are given the integer n and an integer array startPos where
 * startPos = [startrow, startcol] indicates that a robot is initially at cell (startrow, startcol).
 *
 * You are also given a 0-indexed string s of length m where s[i] is the ith instruction for the
 * robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down).
 *
 * The robot can begin executing from any ith instruction in s. It executes the instructions one
 * by one towards the end of s but it stops if either of these conditions is met:
 * - The next instruction will move the robot off the grid.
 * - There are no more instructions left to execute.
 *
 * Return an array answer of length m where answer[i] is the number of instructions the robot can
 * execute if the robot begins executing from the ith instruction in s.
 */

/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
  const m = s.length;
  const result = new Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    let row = startPos[0];
    let col = startPos[1];
    let steps = 0;

    for (let j = i; j < m; j++) {
      if (s[j] === 'L') col--;
      else if (s[j] === 'R') col++;
      else if (s[j] === 'U') row--;
      else row++;

      if (row < 0 || row >= n || col < 0 || col >= n) break;
      steps++;
    }

    result[i] = steps;
  }

  return result;
};
