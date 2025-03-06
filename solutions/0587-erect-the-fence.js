/**
 * 587. Erect the Fence
 * https://leetcode.com/problems/erect-the-fence/
 * Difficulty: Hard
 *
 * You are given an array trees where trees[i] = [xi, yi] represents the location of
 * a tree in the garden.
 *
 * Fence the entire garden using the minimum length of rope, as it is expensive. The
 * garden is well-fenced only if all the trees are enclosed.
 *
 * Return the coordinates of trees that are exactly located on the fence perimeter.
 * You may return the answer in any order.
 */

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
  const a = [];
  const b = [];

  trees.sort(([x1, y1], [x2, y2]) => x1 === x2 ? y1 - y2 : x1 - x2);
  for (const point of trees) {
    while (a.length >= 2 && cross(a[a.length - 2], a[a.length - 1], point) < 0) {
      a.pop();
    }
    a.push(point);
    while (b.length >= 2 && cross(b[b.length - 2], b[b.length - 1], point) > 0) {
      b.pop();
    }
    b.push(point);
  }

  return [...new Set([...a, ...b].map(p => JSON.stringify(p)))].map(p => JSON.parse(p));

  function cross(p, q, r) {
    return (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  }
};
