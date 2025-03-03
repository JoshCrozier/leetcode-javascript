/**
 * 488. Zuma Game
 * https://leetcode.com/problems/zuma-game/
 * Difficulty: Hard
 *
 * You are playing a variation of the game Zuma.
 *
 * In this variation of Zuma, there is a single row of colored balls on a board, where each ball
 * can be colored red 'R', yellow 'Y', blue 'B', green 'G', or white 'W'. You also have several
 * colored balls in your hand.
 *
 * Your goal is to clear all of the balls from the board. On each turn:
 * - Pick any ball from your hand and insert it in between two balls in the row or on either end
 *   of the row.
 * - If there is a group of three or more consecutive balls of the same color, remove the group of
 *   balls from the board.
 *   - If this removal causes more groups of three or more of the same color to form, then continue
 *     removing each group until there are none left.
 * - If there are no more balls on the board, then you win the game.
 * - Repeat this process until you either win or do not have any more balls in your hand.
 *
 * Given a string board, representing the row of balls on the board, and a string hand, representing
 * the balls in your hand, return the minimum number of balls you have to insert to clear all the
 * balls from the board. If you cannot clear all the balls from the board using the balls in your
 * hand, return -1.
 */

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  const handCount = {};
  for (const ball of hand) {
    handCount[ball] = (handCount[ball] || 0) + 1;
  }

  const memo = new Map();

  function dfs(board, hand) {
    if (board.length === 0) return 0;
    if (Object.values(hand).every(count => count === 0)) return -1;
    const key = board + getHandString(hand);
    if (memo.has(key)) return memo.get(key);
    let minSteps = Infinity;

    for (const color in hand) {
      if (hand[color] <= 0) continue;
      hand[color]--;
      for (let i = 0; i <= board.length; i++) {
        if (i > 0 && i < board.length) {
          const left = board[i-1];
          const right = board[i];
          if (left !== color && right !== color && left !== right) continue;
        }
        const newBoard = board.slice(0, i) + color + board.slice(i);
        const afterRemove = removeConsecutive(newBoard);
        const steps = dfs(afterRemove, hand);
        if (steps !== -1) {
          minSteps = Math.min(minSteps, steps + 1);
        }
      }
      hand[color]++;
    }
    const result = minSteps === Infinity ? -1 : minSteps;
    memo.set(key, result);
    return result;
  };

  return dfs(board, handCount);
};

function getHandString(hand) {
  return Object.entries(hand)
    .filter(([_, count]) => count > 0)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([color, count]) => color + count)
    .join('');
}

function removeConsecutive(board) {
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < board.length;) {
      let j = i;
      while (j < board.length && board[j] === board[i]) {
        j++;
      }
      if (j - i >= 3) {
        board = board.substring(0, i) + board.substring(j);
        changed = true;
        i = 0;
      } else {
        i++;
      }
    }
  }
  return board;
}
