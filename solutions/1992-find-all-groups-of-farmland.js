/**
 * 1992. Find All Groups of Farmland
 * https://leetcode.com/problems/find-all-groups-of-farmland/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested
 * land and a 1 represents a hectare of farmland.
 *
 * To keep the land organized, there are designated rectangular areas of hectares that consist
 * entirely of farmland. These rectangular areas are called groups. No two groups are adjacent,
 * meaning farmland in one group is not four-directionally adjacent to another farmland in a
 * different group.
 *
 * land can be represented by a coordinate system where the top left corner of land is (0, 0)
 * and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and
 * bottom right corner of each group of farmland. A group of farmland with a top left corner
 * at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length
 * array [r1, c1, r2, c2].
 *
 * Return a 2D array containing the 4-length arrays described above for each group of farmland
 * in land. If there are no groups of farmland, return an empty array. You may return the answer
 * in any order.
 */

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
  const m = land.length;
  const n = land[0].length;
  const result = [];

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (land[r][c] === 1) {
        let r2 = r;
        let c2 = c;

        while (r2 + 1 < m && land[r2 + 1][c] === 1) r2++;
        while (c2 + 1 < n && land[r][c2 + 1] === 1) c2++;

        result.push([r, c, r2, c2]);

        for (let i = r; i <= r2; i++) {
          for (let j = c; j <= c2; j++) {
            land[i][j] = 0;
          }
        }
      }
    }
  }

  return result;
};
