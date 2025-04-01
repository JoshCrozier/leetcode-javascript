/**
 * 1036. Escape a Large Maze
 * https://leetcode.com/problems/escape-a-large-maze/
 * Difficulty: Hard
 *
 * There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid
 * square are (x, y).
 *
 * We start at the source = [sx, sy] square and want to reach the target = [tx, ty] square.
 * There is also an array of blocked squares, where each blocked[i] = [xi, yi] represents
 * a blocked square with coordinates (xi, yi).
 *
 * Each move, we can walk one square north, east, south, or west if the square is not in
 * the array of blocked squares. We are also not allowed to walk outside of the grid.
 *
 * Return true if and only if it is possible to reach the target square from the source
 * square through a sequence of valid moves.
 */

/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
  const MAX = 1e6;
  const LIMIT = 19900;
  const blockedSet = new Set(blocked.map(([x, y]) => `${x},${y}`));

  if (!helper(source, target)) {
    return false;
  }

  return helper(target, source);

  function helper(start, goal) {
    const queue = [start];
    const visited = new Set([`${start[0]},${start[1]}`]);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (queue.length && visited.size <= LIMIT) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        const key = `${newX},${newY}`;

        if (newX < 0 || newX >= MAX || newY < 0 || newY >= MAX
            || blockedSet.has(key) || visited.has(key)) {
          continue;
        }

        if (newX === goal[0] && newY === goal[1]) {
          return true;
        }

        queue.push([newX, newY]);
        visited.add(key);
      }
    }

    return visited.size > LIMIT;
  }
};
