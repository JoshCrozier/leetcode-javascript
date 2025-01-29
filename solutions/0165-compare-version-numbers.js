/**
 * 165. Compare Version Numbers
 * https://leetcode.com/problems/compare-version-numbers/
 * Difficulty: Medium
 *
 * Given two version strings, version1 and version2, compare them. A version string
 * consists of revisions separated by dots '.'. The value of the revision is its
 * integer conversion ignoring leading zeros.
 *
 * To compare version strings, compare their revision values in left-to-right order.
 * If one of the version strings has fewer revisions, treat the missing revision
 * values as 0.
 *
 * Return the following:
 * - If version1 < version2, return -1.
 * - If version1 > version2, return 1.
 * - Otherwise, return 0.
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const [v1, v2] = [version1.split(/\./), version2.split(/\./)];

  while (v1.length || v2.length) {
    const [a, b] = [v1.shift(), v2.shift()].map(s => Number(s ?? 0));
    if (a < b) return -1;
    if (a > b) return 1;
  }

  return 0;
};
