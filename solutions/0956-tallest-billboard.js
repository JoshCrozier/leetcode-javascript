/**
 * 956. Tallest Billboard
 * https://leetcode.com/problems/tallest-billboard/
 * Difficulty: Hard
 *
 * You are installing a billboard and want it to have the largest height. The billboard will have
 * two steel supports, one on each side. Each steel support must be an equal height.
 *
 * You are given a collection of rods that can be welded together. For example, if you have rods
 * of lengths 1, 2, and 3, you can weld them together to make a support of length 6.
 *
 * Return the largest possible height of your billboard installation. If you cannot support the
 * billboard, return 0.
 */

/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
  const differences = new Map([[0, 0]]);

  for (const rod of rods) {
    const currentDiffs = new Map(differences);

    for (const [diff, taller] of currentDiffs) {
      const shorter = taller - diff;
      const newDiff = diff + rod;
      const newTaller = taller + rod;
      differences.set(newDiff, Math.max(differences.get(newDiff) || 0, newTaller));

      const diffAbs = Math.abs(diff - rod);
      const diffMax = Math.max(shorter + rod, taller);
      differences.set(diffAbs, Math.max(differences.get(diffAbs) || 0, diffMax));
    }
  }

  return differences.get(0) || 0;
};
