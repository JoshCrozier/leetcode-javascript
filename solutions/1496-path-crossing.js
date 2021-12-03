/**
 * 1496. Path Crossing
 * https://leetcode.com/problems/path-crossing/
 * Difficulty: Easy
 *
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing
 * moving one unit north, south, east, or west, respectively. You start at the
 * origin (0, 0) on a 2D plane and walk on the path specified by path.
 *
 * Return true if the path crosses itself at any point, that is, if at any time
 * you are on a location you have previously visited. Return false otherwise.
 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let x = 0, y = 0;
  const toKey = (a, b) => `${a},${b}`;
  const history = new Set([toKey(x, y)]);

  for (let direction of path) {
    switch (direction) {
      case 'N': x++; break;
      case 'W': y--; break;
      case 'S': x--; break;
      case 'E': y++; break;
    }
    if (history.has(toKey(x, y))) {
      return true;
    }
    history.add(toKey(x, y));
  }

  return false;
};
