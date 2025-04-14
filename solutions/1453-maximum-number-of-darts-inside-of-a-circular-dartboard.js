/**
 * 1453. Maximum Number of Darts Inside of a Circular Dartboard
 * https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/
 * Difficulty: Hard
 *
 * Alice is throwing n darts on a very large wall. You are given an array darts where
 * darts[i] = [xi, yi] is the position of the ith dart that Alice threw on the wall.
 *
 * Bob knows the positions of the n darts on the wall. He wants to place a dartboard of
 * radius r on the wall so that the maximum number of darts that Alice throws lie on the
 * dartboard.
 *
 * Given the integer r, return the maximum number of darts that can lie on the dartboard.
 */

/**
 * @param {number[][]} darts
 * @param {number} r
 * @return {number}
 */
var numPoints = function(darts, r) {
  let maxDarts = 1;
  const n = darts.length;
  const radiusSquared = r * r;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = darts[j][0] - darts[i][0];
      const dy = darts[j][1] - darts[i][1];
      const distSquared = dx * dx + dy * dy;

      if (distSquared > 4 * radiusSquared + 1e-8) continue;

      const midX = (darts[i][0] + darts[j][0]) / 2;
      const midY = (darts[i][1] + darts[j][1]) / 2;

      if (distSquared < 1e-8) continue;

      const dist = Math.sqrt(distSquared) / 2;
      const height = Math.sqrt(radiusSquared - dist * dist);

      let perpX = -dy;
      let perpY = dx;
      const norm = Math.sqrt(perpX * perpX + perpY * perpY);
      perpX /= norm;
      perpY /= norm;

      const count1 = countDartsInCircle(darts, midX + height * perpX, midY + height * perpY, r);
      const count2 = countDartsInCircle(darts, midX - height * perpX, midY - height * perpY, r);

      maxDarts = Math.max(maxDarts, count1, count2);
    }
  }

  return maxDarts;

  function countDartsInCircle(darts, centerX, centerY, r) {
    let count = 0;
    const radiusSquared = r * r;

    for (const dart of darts) {
      const dx = dart[0] - centerX;
      const dy = dart[1] - centerY;
      if (dx * dx + dy * dy <= radiusSquared + 1e-8) {
        count++;
      }
    }

    return count;
  }
};
