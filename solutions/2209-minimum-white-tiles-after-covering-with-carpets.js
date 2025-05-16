/**
 * 2209. Minimum White Tiles After Covering With Carpets
 * https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/
 * Difficulty: Hard
 *
 * You are given a 0-indexed binary string floor, which represents the colors of tiles on a floor:
 * - floor[i] = '0' denotes that the ith tile of the floor is colored black.
 * - On the other hand, floor[i] = '1' denotes that the ith tile of the floor is colored white.
 *
 * You are also given numCarpets and carpetLen. You have numCarpets black carpets, each of length
 * carpetLen tiles. Cover the tiles with the given carpets such that the number of white tiles
 * still visible is minimum. Carpets may overlap one another.
 *
 * Return the minimum number of white tiles still visible.
 */

/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
  const n = floor.length;
  const dp = Array.from({ length: n + 1 }, () => Array(numCarpets + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= numCarpets; j++) {
      const skip = dp[i - 1][j] + (floor[i - 1] === '1' ? 1 : 0);
      const cover = j > 0 ? dp[Math.max(0, i - carpetLen)][j - 1] : Infinity;
      dp[i][j] = Math.min(skip, cover);
    }
  }

  return dp[n][numCarpets];
};
