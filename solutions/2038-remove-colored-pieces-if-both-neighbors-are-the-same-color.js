/**
 * 2038. Remove Colored Pieces if Both Neighbors are the Same Color
 * https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 * Difficulty: Medium
 *
 * There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'.
 * You are given a string colors of length n where colors[i] is the color of the ith piece.
 *
 * Alice and Bob are playing a game where they take alternating turns removing pieces from the
 * line. In this game, Alice moves first.
 * - Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored
 *   'A'. She is not allowed to remove pieces that are colored 'B'.
 * - Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored
 *   'B'. He is not allowed to remove pieces that are colored 'A'.
 * - Alice and Bob cannot remove pieces from the edge of the line.
 * - If a player cannot make a move on their turn, that player loses and the other player wins.
 *
 * Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.
 */

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  let aliceMoves = 0;
  let bobMoves = 0;

  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A') {
      aliceMoves++;
    } else if (colors[i] === 'B' && colors[i - 1] === 'B' && colors[i + 1] === 'B') {
      bobMoves++;
    }
  }

  return aliceMoves > bobMoves;
};
