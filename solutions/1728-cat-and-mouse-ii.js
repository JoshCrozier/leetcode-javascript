/**
 * 1728. Cat and Mouse II
 * https://leetcode.com/problems/cat-and-mouse-ii/
 * Difficulty: Hard
 *
 * A game is played by a cat and a mouse named Cat and Mouse.
 *
 * The environment is represented by a grid of size rows x cols, where each element is a wall,
 * floor, player (Cat, Mouse), or food.
 * - Players are represented by the characters 'C'(Cat),'M'(Mouse).
 * - Floors are represented by the character '.' and can be walked on.
 * - Walls are represented by the character '#' and cannot be walked on.
 * - Food is represented by the character 'F' and can be walked on.
 * - There is only one of each character 'C', 'M', and 'F' in grid.
 *
 * Mouse and Cat play according to the following rules:
 * - Mouse moves first, then they take turns to move.
 * - During each turn, Cat and Mouse can jump in one of the four directions (left, right, up, down).
 *   They cannot jump over the wall nor outside of the grid.
 * - catJump, mouseJump are the maximum lengths Cat and Mouse can jump at a time, respectively.
 *   Cat and Mouse can jump less than the maximum length.
 * - Staying in the same position is allowed.
 * - Mouse can jump over Cat.
 *
 * The game can end in 4 ways:
 * - If Cat occupies the same position as Mouse, Cat wins.
 * - If Cat reaches the food first, Cat wins.
 * - If Mouse reaches the food first, Mouse wins.
 * - If Mouse cannot get to the food within 1000 turns, Cat wins.
 *
 * Given a rows x cols matrix grid and two integers catJump and mouseJump, return true if Mouse
 * can win the game if both Cat and Mouse play optimally, otherwise return false.
 */

/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
var canMouseWin = function(grid, catJump, mouseJump) {
  if (typeof grid === 'string') grid = [grid];
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let mouse;
  let cat;
  let food;
  let available = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = grid[i][j];
      if (cell !== '#') available++;
      if (cell === 'M') mouse = [i, j];
      else if (cell === 'C') cat = [i, j];
      else if (cell === 'F') food = [i, j];
    }
  }

  const memo = new Map();

  return canWin(0, mouse, cat);

  function getKey(turn, [mr, mc], [cr, cc]) {
    return `${turn},${mr},${mc},${cr},${cc}`;
  }

  function isValid(r, c) {
    return r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] !== '#';
  }

  function canWin(turn, mousePos, catPos) {
    if (turn >= available * 2) return false;

    const key = getKey(turn, mousePos, catPos);
    if (memo.has(key)) return memo.get(key);

    const isMouseTurn = turn % 2 === 0;
    const [r, c] = isMouseTurn ? mousePos : catPos;
    const maxJump = isMouseTurn ? mouseJump : catJump;

    for (const [dr, dc] of dirs) {
      for (let jump = 0; jump <= maxJump; jump++) {
        const nr = r + dr * jump;
        const nc = c + dc * jump;
        if (!isValid(nr, nc)) break;

        if (isMouseTurn) {
          if (grid[nr][nc] === 'F' || canWin(turn + 1, [nr, nc], catPos)) {
            memo.set(key, true);
            return true;
          }
        } else {
          if (grid[nr][nc] === 'F' || (nr === mousePos[0] && nc === mousePos[1])
              || !canWin(turn + 1, mousePos, [nr, nc])) {
            memo.set(key, false);
            return false;
          }
        }
      }
    }

    memo.set(key, !isMouseTurn);
    return !isMouseTurn;
  }
};
