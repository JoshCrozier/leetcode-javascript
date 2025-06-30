/**
 * 1257. Smallest Common Region
 * https://leetcode.com/problems/smallest-common-region/
 * Difficulty: Medium
 *
 * You are given some lists of regions where the first region of each list directly contains
 * all other regions in that list.
 *
 * If a region x contains a region y directly, and region y contains region z directly, then
 * region x is said to contain region z indirectly. Note that region x also indirectly contains
 * all regions indirectly containd in y.
 *
 * Naturally, if a region x contains (either directly or indirectly) another region y, then x
 * is bigger than or equal to y in size. Also, by definition, a region x contains itself.
 *
 * Given two regions: region1 and region2, return the smallest region that contains both of them.
 *
 * It is guaranteed the smallest region exists.
 */

/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
  const map = new Map();

  for (const region of regions) {
    const parent = region[0];
    for (let i = 1; i < region.length; i++) {
      map.set(region[i], parent);
    }
  }

  const path1 = getPath(region1);
  const path2 = getPath(region2);
  const set = new Set(path1);

  for (const ancestor of path2) {
    if (set.has(ancestor)) {
      return ancestor;
    }
  }

  function getPath(region) {
    const path = [];
    let current = region;
    while (current) {
      path.push(current);
      current = map.get(current);
    }
    return path;
  }
};
