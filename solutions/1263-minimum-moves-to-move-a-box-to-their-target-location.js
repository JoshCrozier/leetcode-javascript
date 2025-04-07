/**
 * 1263. Minimum Moves to Move a Box to Their Target Location
 * https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/
 * Difficulty: Hard
 *
 * A storekeeper is a game in which the player pushes boxes around in a warehouse trying to get
 * them to target locations.
 *
 * The game is represented by an m x n grid of characters grid where each element is a wall, floor,
 * or box.
 *
 * Your task is to move the box 'B' to the target position 'T' under the following rules:
 * - The character 'S' represents the player. The player can move up, down, left, right in grid if
 *   it is a floor (empty cell).
 * - The character '.' represents the floor which means a free cell to walk.
 * - The character '#' represents the wall which means an obstacle (impossible to walk there).
 * - There is only one box 'B' and one target cell 'T' in the grid.
 * - The box can be moved to an adjacent free cell by standing next to the box and then moving in
 *   the direction of the box. This is a push.
 * - The player cannot walk through the box.
 *
 * Return the minimum number of pushes to move the box to the target. If there is no way to reach
 * the target, return -1.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let player;
  let box;
  let target;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'S') player = [i, j];
      if (grid[i][j] === 'B') box = [i, j];
      if (grid[i][j] === 'T') target = [i, j];
    }
  }

  const queue = [[...box, ...player, 0]];
  const seen = new Set([`${box}-${player}`]);
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  function canReach(src, dst, fixedBox) {
    const visited = new Set();
    const stack = [src];

    while (stack.length) {
      const [r, c] = stack.pop();
      if (r === dst[0] && c === dst[1]) return true;
      if (visited.has(`${r}-${c}`)) continue;
      visited.add(`${r}-${c}`);

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === '#'
            || (nr === fixedBox[0] && nc === fixedBox[1])) continue;
        stack.push([nr, nc]);
      }
    }
    return false;
  }

  while (queue.length) {
    const [boxRow, boxCol, playerRow, playerCol, pushes] = queue.shift();
    if (boxRow === target[0] && boxCol === target[1]) return pushes;

    for (const [dr, dc] of directions) {
      const newBoxRow = boxRow + dr;
      const newBoxCol = boxCol + dc;
      const newPlayerRow = boxRow - dr;
      const newPlayerCol = boxCol - dc;

      if (newBoxRow < 0 || newBoxRow >= rows || newBoxCol < 0 || newBoxCol >= cols
          || grid[newBoxRow][newBoxCol] === '#') continue;
      if (!canReach([playerRow, playerCol], [newPlayerRow, newPlayerCol], [boxRow, boxCol])) {
        continue;
      }

      const state = `${newBoxRow}-${newBoxCol}-${newPlayerRow}-${newPlayerCol}`;
      if (seen.has(state)) continue;

      seen.add(state);
      queue.push([newBoxRow, newBoxCol, newPlayerRow, newPlayerCol, pushes + 1]);
    }
  }

  return -1;
};
