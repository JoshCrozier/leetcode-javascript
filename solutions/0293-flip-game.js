/**
 * 293. Flip Game
 * https://leetcode.com/problems/flip-game/
 * Difficulty: Easy
 *
 * You are playing a Flip Game with your friend.
 *
 * You are given a string currentState that contains only '+' and '-'. You and your friend take
 * turns to flip two consecutive "++" into "--". The game ends when a person can no longer make
 * a move, and therefore the other person will be the winner.
 *
 * Return all possible states of the string currentState after one valid move. You may return
 * the answer in any order. If there is no valid move, return an empty list [].
 */

/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
  const results = [];

  for (let i = 0; i < currentState.length - 1; i++) {
    if (currentState[i] === '+' && currentState[i + 1] === '+') {
      results.push(
        currentState.slice(0, i) + '--' + currentState.slice(i + 2)
      );
    }
  }

  return results;
};
