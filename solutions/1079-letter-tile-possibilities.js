/**
 * 1079. Letter Tile Possibilities
 * https://leetcode.com/problems/letter-tile-possibilities/
 * Difficulty: Medium
 *
 * You have n  tiles, where each tile has one letter tiles[i] printed on it.
 *
 * Return the number of possible non-empty sequences of letters you can make using the letters
 * printed on those tiles.
 */

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  const map = {};
  tiles.split('').forEach(t => map[t] = (map[t] ?? 0) + 1);
  return backtrack();

  function backtrack() {
    let count = 0;
    for (const key of Object.keys(map)) {
      if (!map[key]) continue;
      count += 1;
      map[key] -= 1;
      count += backtrack();
      map[key] += 1;
    }
    return count;
  }
};
