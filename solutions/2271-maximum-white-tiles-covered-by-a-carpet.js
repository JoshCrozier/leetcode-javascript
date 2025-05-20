/**
 * 2271. Maximum White Tiles Covered by a Carpet
 * https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/
 * Difficulty: Medium
 *
 * You are given a 2D integer array tiles where tiles[i] = [li, ri] represents that every tile
 * j in the range li <= j <= ri is colored white.
 *
 * You are also given an integer carpetLen, the length of a single carpet that can be placed
 * anywhere.
 *
 * Return the maximum number of white tiles that can be covered by the carpet.
 */

/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);

  let result = 0;
  let covered = 0;
  let j = 0;

  for (let i = 0; i < tiles.length; i++) {
    const carpetEnd = tiles[i][0] + carpetLen - 1;

    while (j < tiles.length && tiles[j][0] <= carpetEnd) {
      if (tiles[j][1] <= carpetEnd) {
        covered += tiles[j][1] - tiles[j][0] + 1;
        j++;
      } else {
        covered += carpetEnd - tiles[j][0] + 1;
        result = Math.max(result, covered);
        covered -= carpetEnd - tiles[j][0] + 1;
        break;
      }
    }

    result = Math.max(result, covered);

    if (j === tiles.length) break;

    covered -= tiles[i][1] - tiles[i][0] + 1;
  }

  return result;
};
