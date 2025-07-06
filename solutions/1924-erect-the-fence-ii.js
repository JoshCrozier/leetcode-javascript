/**
 * 1924. Erect the Fence II
 * https://leetcode.com/problems/erect-the-fence-ii/
 * Difficulty: Hard
 *
 * You are given a 2D integer array trees where trees[i] = [xi, yi] represents the location
 * of the ith tree in the garden.
 *
 * You are asked to fence the entire garden using the minimum length of rope possible. The garden
 * is well-fenced only if all the trees are enclosed and the rope used forms a perfect circle.
 * A tree is considered enclosed if it is inside or on the border of the circle.
 *
 * More formally, you must form a circle using the rope with a center (x, y) and radius r where
 * all trees lie inside or on the circle and r is minimum.
 *
 * Return the center and radius of the circle as a length 3 array [x, y, r]. Answers within 10-5
 * of the actual answer will be accepted.
 */

/**
 * @param {number[][]} trees
 * @return {number[]}
 */
var outerTrees = function(trees) {
  const n = trees.length;

  if (n === 1) {
    return [trees[0][0], trees[0][1], 0];
  }

  const shuffled = [...trees];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return getMinimumEnclosingCircle(shuffled, []);

  function distance(p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
  }

  function getCircleFromTwoPoints(p1, p2) {
    const x = (p1[0] + p2[0]) / 2;
    const y = (p1[1] + p2[1]) / 2;
    const r = distance(p1, p2) / 2;
    return [x, y, r];
  }

  function getCircleFromThreePoints(p1, p2, p3) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;

    const d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

    if (Math.abs(d) < 1e-10) {
      return null;
    }

    const ux = ((x1 ** 2 + y1 ** 2) * (y2 - y3) + (x2 ** 2 + y2 ** 2) * (y3 - y1)
      + (x3 ** 2 + y3 ** 2) * (y1 - y2)) / d;
    const uy = ((x1 ** 2 + y1 ** 2) * (x3 - x2) + (x2 ** 2 + y2 ** 2) * (x1 - x3)
      + (x3 ** 2 + y3 ** 2) * (x2 - x1)) / d;
    const r = distance([ux, uy], p1);

    return [ux, uy, r];
  }

  function isInsideCircle(point, circle) {
    const [x, y, r] = circle;
    return distance(point, [x, y]) <= r + 1e-7;
  }

  function getMinimumEnclosingCircle(points, boundary) {
    if (boundary.length === 3 || points.length === 0) {
      if (boundary.length === 0) return [0, 0, 0];
      if (boundary.length === 1) return [boundary[0][0], boundary[0][1], 0];
      if (boundary.length === 2) return getCircleFromTwoPoints(boundary[0], boundary[1]);
      return getCircleFromThreePoints(boundary[0], boundary[1], boundary[2]);
    }

    const point = points[0];
    const circle = getMinimumEnclosingCircle(points.slice(1), boundary);
    if (isInsideCircle(point, circle)) {
      return circle;
    }

    return getMinimumEnclosingCircle(points.slice(1), boundary.concat([point]));
  }
};
