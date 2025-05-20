/**
 * 2337. Move Pieces to Obtain a String
 * https://leetcode.com/problems/move-pieces-to-obtain-a-string/
 * Difficulty: Medium
 *
 * You are given two strings start and target, both of length n. Each string consists only of
 * the characters 'L', 'R', and '_' where:
 * - The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if
 *   there is a blank space directly to its left, and a piece 'R' can move to the right only if
 *   there is a blank space directly to its right.
 * - The character '_' represents a blank space that can be occupied by any of the 'L' or 'R'
 *   pieces.
 *
 * Return true if it is possible to obtain the string target by moving the pieces of the string
 * start any number of times. Otherwise, return false.
 */

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
  const pieces = [];
  const targetPieces = [];

  for (let i = 0; i < start.length; i++) {
    if (start[i] !== '_') pieces.push([start[i], i]);
    if (target[i] !== '_') targetPieces.push([target[i], i]);
  }

  if (pieces.length !== targetPieces.length) return false;

  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i][0] !== targetPieces[i][0]) return false;
    if (pieces[i][0] === 'L' && pieces[i][1] < targetPieces[i][1]) return false;
    if (pieces[i][0] === 'R' && pieces[i][1] > targetPieces[i][1]) return false;
  }

  return true;
};
