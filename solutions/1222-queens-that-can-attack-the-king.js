/**
 * 1222. Queens That Can Attack the King
 * https://leetcode.com/problems/queens-that-can-attack-the-king/
 * Difficulty: Medium
 *
 * On a 0-indexed 8 x 8 chessboard, there can be multiple black queens and one white king.
 *
 * You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the
 * position of the ith black queen on the chessboard. You are also given an integer array king
 * of length 2 where king = [xKing, yKing] represents the position of the white king.
 *
 * Return the coordinates of the black queens that can directly attack the king. You may return
 * the answer in any order.
 */

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  const [kingX, kingY] = king;
  const queenSet = new Set(queens.map(([x, y]) => `${x},${y}`));
  const attackers = [];
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];

  for (const [dx, dy] of directions) {
    let x = kingX + dx;
    let y = kingY + dy;

    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      const pos = `${x},${y}`;
      if (queenSet.has(pos)) {
        attackers.push([x, y]);
        break;
      }
      x += dx;
      y += dy;
    }
  }

  return attackers;
};
