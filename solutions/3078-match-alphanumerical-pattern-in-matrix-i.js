/**
 * 3078. Match Alphanumerical Pattern in Matrix I
 * https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/
 * Difficulty: Medium
 *
 * You are given a 2D integer matrix board and a 2D character matrix pattern.
 * Where 0 <= board[r][c] <= 9 and each element of pattern is either a digit or a
 * lowercase English letter.
 *
 * Your task is to find a submatrix of board that matches pattern.
 *
 * An integer matrix part matches pattern if we can replace cells containing letters in
 * pattern with some digits (each distinct letter with a unique digit) in such a way that
 * the resulting matrix becomes identical to the integer matrix part. In other words,
 * - The matrices have identical dimensions.
 * - If pattern[r][c] is a digit, then part[r][c] must be the same digit.
 * - If pattern[r][c] is a letter x:
 *   - For every pattern[i][j] == x, part[i][j] must be the same as part[r][c].
 *   - For every pattern[i][j] != x, part[i][j] must be different than part[r][c].
 *
 * Return an array of length 2 containing the row number and column number of the upper-left
 * corner of a submatrix of board which matches pattern. If there is more than one such submatrix,
 * return the coordinates of the submatrix with the lowest row index, and in case there is still
 * a tie, return the coordinates of the submatrix with the lowest column index. If there are no
 * suitable answers, return [-1, -1].
 */

/**
 * @param {number[][]} board
 * @param {string[]} pattern
 * @return {number[]}
 */
var findPattern = function(board, pattern) {
  const boardRows = board.length;
  const boardCols = board[0].length;
  const patternRows = pattern.length;
  const patternCols = pattern[0].length;

  for (let startRow = 0; startRow <= boardRows - patternRows; startRow++) {
    for (let startCol = 0; startCol <= boardCols - patternCols; startCol++) {
      if (isPatternMatch(board, pattern, startRow, startCol)) {
        return [startRow, startCol];
      }
    }
  }

  return [-1, -1];

  function isPatternMatch(board, pattern, startRow, startCol) {
    const letterToDigit = new Map();
    const digitToLetter = new Map();
    const usedDigits = new Set();

    for (let patternRow = 0; patternRow < pattern.length; patternRow++) {
      for (let patternCol = 0; patternCol < pattern[0].length; patternCol++) {
        const patternChar = pattern[patternRow][patternCol];
        const boardDigit = board[startRow + patternRow][startCol + patternCol];

        if (isDigit(patternChar)) {
          if (parseInt(patternChar) !== boardDigit) {
            return false;
          }
        } else {
          if (letterToDigit.has(patternChar)) {
            if (letterToDigit.get(patternChar) !== boardDigit) {
              return false;
            }
          } else {
            if (usedDigits.has(boardDigit) || digitToLetter.has(boardDigit)) {
              return false;
            }
            letterToDigit.set(patternChar, boardDigit);
            digitToLetter.set(boardDigit, patternChar);
            usedDigits.add(boardDigit);
          }
        }
      }
    }

    return true;
  }

  function isDigit(char) {
    return char >= '0' && char <= '9';
  }
};
