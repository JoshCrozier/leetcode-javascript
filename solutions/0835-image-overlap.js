/**
 * 835. Image Overlap
 * https://leetcode.com/problems/image-overlap/
 * Difficulty: Medium
 *
 * You are given two images, img1 and img2, represented as binary, square matrices of size n x n.
 * A binary matrix has only 0s and 1s as values.
 *
 * We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down
 * any number of units. We then place it on top of the other image. We can then calculate the
 * overlap by counting the number of positions that have a 1 in both images.
 *
 * Note also that a translation does not include any kind of rotation. Any 1 bits that are
 * translated outside of the matrix borders are erased.
 *
 * Return the largest possible overlap.
 */

/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
  const positions1 = [];
  const positions2 = [];

  for (let i = 0; i < img1.length; i++) {
    for (let j = 0; j < img1.length; j++) {
      if (img1[i][j] === 1) {
        positions1.push([i, j]);
      }
      if (img2[i][j] === 1) {
        positions2.push([i, j]);
      }
    }
  }

  if (positions1.length === 0 || positions2.length === 0) {
    return 0;
  }

  const translations = new Map();
  let maxOverlap = 0;

  for (const [r1, c1] of positions1) {
    for (const [r2, c2] of positions2) {
      const translation = `${r2 - r1},${c2 - c1}`;

      if (!translations.has(translation)) {
        translations.set(translation, 0);
      }

      translations.set(translation, translations.get(translation) + 1);
      maxOverlap = Math.max(maxOverlap, translations.get(translation));
    }
  }

  return maxOverlap;
};
