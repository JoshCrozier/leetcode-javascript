/**
 * 1923. Longest Common Subpath
 * https://leetcode.com/problems/longest-common-subpath/
 * Difficulty: Hard
 *
 * There is a country of n cities numbered from 0 to n - 1. In this country, there is a road
 * connecting every pair of cities.
 *
 * There are m friends numbered from 0 to m - 1 who are traveling through the country. Each one
 * of them will take a path consisting of some cities. Each path is represented by an integer
 * array that contains the visited cities in order. The path may contain a city more than once,
 * but the same city will not be listed consecutively.
 *
 * Given an integer n and a 2D integer array paths where paths[i] is an integer array representing
 * the path of the ith friend, return the length of the longest common subpath that is shared
 * by every friend's path, or 0 if there is no common subpath at all.
 *
 * A subpath of a path is a contiguous sequence of cities within that path.
 */

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
var longestCommonSubpath = function(n, paths) {
  if (paths.length === 0) return 0;

  paths.sort((a, b) => a.length - b.length);

  let left = 0;
  let right = paths[0].length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (checkCommonSubpathExists(paths, mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};

function checkCommonSubpathExists(paths, length) {
  if (length === 0) return true;

  const firstPath = paths[0];

  if (firstPath.length < length) return false;

  const prime = 1000000007;
  const base = 100003;

  let highestPower = 1;
  for (let i = 0; i < length - 1; i++) {
    highestPower = (highestPower * base) % prime;
  }

  let hashToPositions = new Map();

  let hash = 0;
  for (let i = 0; i < length; i++) {
    hash = (hash * base + firstPath[i]) % prime;
  }

  if (!hashToPositions.has(hash)) {
    hashToPositions.set(hash, []);
  }
  hashToPositions.get(hash).push(0);

  for (let i = 1; i <= firstPath.length - length; i++) {
    hash = ((hash - firstPath[i - 1] * highestPower % prime + prime)
           % prime * base + firstPath[i + length - 1]) % prime;

    if (!hashToPositions.has(hash)) {
      hashToPositions.set(hash, []);
    }
    hashToPositions.get(hash).push(i);
  }

  for (let pathIdx = 1; pathIdx < paths.length; pathIdx++) {
    const path = paths[pathIdx];

    if (path.length < length) return false;

    const newHashToPositions = new Map();
    hash = 0;
    for (let i = 0; i < length; i++) {
      hash = (hash * base + path[i]) % prime;
    }

    if (hashToPositions.has(hash)) {
      const positions = hashToPositions.get(hash);
      for (const pos of positions) {
        let isMatch = true;
        for (let j = 0; j < length; j++) {
          if (firstPath[pos + j] !== path[j]) {
            isMatch = false;
            break;
          }
        }

        if (isMatch) {
          if (!newHashToPositions.has(hash)) {
            newHashToPositions.set(hash, []);
          }
          newHashToPositions.get(hash).push(pos);
          break;
        }
      }
    }

    for (let i = 1; i <= path.length - length; i++) {
      hash = ((hash - path[i - 1] * highestPower % prime + prime)
              % prime * base + path[i + length - 1]) % prime;

      if (hashToPositions.has(hash)) {
        const positions = hashToPositions.get(hash);
        for (const pos of positions) {
          let isMatch = true;
          for (let j = 0; j < length; j++) {
            if (firstPath[pos + j] !== path[i + j]) {
              isMatch = false;
              break;
            }
          }

          if (isMatch) {
            if (!newHashToPositions.has(hash)) {
              newHashToPositions.set(hash, []);
            }
            newHashToPositions.get(hash).push(pos);
            break;
          }
        }
      }
    }

    if (newHashToPositions.size === 0) return false;

    hashToPositions = newHashToPositions;
  }

  return hashToPositions.size > 0;
}
