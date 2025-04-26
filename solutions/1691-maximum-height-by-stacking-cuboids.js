/**
 * 1691. Maximum Height by Stacking Cuboids
 * https://leetcode.com/problems/maximum-height-by-stacking-cuboids/
 * Difficulty: Hard
 *
 * Given n cuboids where the dimensions of the ith cuboid is cuboids[i] = [widthi, lengthi, heighti]
 * (0-indexed). Choose a subset of cuboids and place them on each other.
 *
 * You can place cuboid i on cuboid j if widthi <= widthj and lengthi <= lengthj and
 * heighti <= heightj. You can rearrange any cuboid's dimensions by rotating it to put it on
 * another cuboid.
 *
 * Return the maximum height of the stacked cuboids.
 */

/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function(cuboids) {
  const sortedCuboids = cuboids.map(dim => dim.sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  const n = sortedCuboids.length;
  const maxHeights = new Array(n).fill(0);
  let result = 0;

  for (let i = 0; i < n; i++) {
    maxHeights[i] = sortedCuboids[i][2];
    for (let j = 0; j < i; j++) {
      if (sortedCuboids[j][0] <= sortedCuboids[i][0]
          && sortedCuboids[j][1] <= sortedCuboids[i][1]
          && sortedCuboids[j][2] <= sortedCuboids[i][2]) {
        maxHeights[i] = Math.max(maxHeights[i], maxHeights[j] + sortedCuboids[i][2]);
      }
    }
    result = Math.max(result, maxHeights[i]);
  }

  return result;
};
