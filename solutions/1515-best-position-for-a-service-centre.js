/**
 * 1515. Best Position for a Service Centre
 * https://leetcode.com/problems/best-position-for-a-service-centre/
 * Difficulty: Hard
 *
 * A delivery company wants to build a new service center in a new city. The company knows the
 * positions of all the customers in this city on a 2D-Map and wants to build the new center in
 * a position such that the sum of the euclidean distances to all customers is minimum.
 *
 * Given an array positions where positions[i] = [xi, yi] is the position of the ith customer on
 * the map, return the minimum sum of the euclidean distances to all customers.
 *
 * In other words, you need to choose the position of the service center [xcentre, ycentre] such
 * that the following formula is minimized:
 * - Answers within 10-5 of the actual value will be accepted.
 */

/**
 * @param {number[][]} positions
 * @return {number}
 */
var getMinDistSum = function(positions) {
  const n = positions.length;
  let xSum = 0;
  let ySum = 0;

  for (const [x, y] of positions) {
    xSum += x;
    ySum += y;
  }

  let xCenter = xSum / n;
  let yCenter = ySum / n;
  const epsilon = 1e-7;
  const maxIterations = 1000;

  for (let iter = 0; iter < maxIterations; iter++) {
    let xNumerator = 0;
    let yNumerator = 0;
    let denominator = 0;

    for (const [x, y] of positions) {
      const dx = xCenter - x;
      const dy = yCenter - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < epsilon) continue;
      const weight = 1 / dist;
      xNumerator += x * weight;
      yNumerator += y * weight;
      denominator += weight;
    }

    if (denominator < epsilon) break;

    const newX = xNumerator / denominator;
    const newY = yNumerator / denominator;

    if (Math.abs(newX - xCenter) < epsilon && Math.abs(newY - yCenter) < epsilon) {
      break;
    }

    xCenter = newX;
    yCenter = newY;
  }

  let sumDist = 0;
  for (const [x, y] of positions) {
    sumDist += Math.sqrt((xCenter - x) ** 2 + (yCenter - y) ** 2);
  }

  return sumDist;
};
