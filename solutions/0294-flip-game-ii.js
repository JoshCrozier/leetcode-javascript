/**
 * 294. Flip Game II
 * https://leetcode.com/problems/flip-game-ii/
 * Difficulty: Medium
 *
 * You are playing a Flip Game with your friend.
 *
 * You are given a string currentState that contains only '+' and '-'. You and your friend take
 * turns to flip two consecutive "++" into "--". The game ends when a person can no longer make
 * a move, and therefore the other person will be the winner.
 *
 * Return true if the starting player can guarantee a win, and false otherwise.
 */

/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function(currentState) {
  const map = new Map();

  return canWinFrom(currentState);

  function canWinFrom(state) {
    if (map.has(state)) return map.get(state);

    for (let i = 0; i < state.length - 1; i++) {
      if (state[i] === '+' && state[i + 1] === '+') {
        const nextState = state.slice(0, i) + '--' + state.slice(i + 2);
        if (!canWinFrom(nextState)) {
          map.set(state, true);
          return true;
        }
      }
    }

    map.set(state, false);
    return false;
  }
};
