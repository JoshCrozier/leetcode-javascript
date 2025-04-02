/**
 * 1042. Flower Planting With No Adjacent
 * https://leetcode.com/problems/flower-planting-with-no-adjacent/
 * Difficulty: Medium
 *
 * You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes
 * a bidirectional path between garden xi to garden yi. In each garden, you want to plant one of
 * 4 types of flowers.
 *
 * All gardens have at most 3 paths coming into or leaving it.
 *
 * Your task is to choose a flower type for each garden such that, for any two gardens connected
 * by a path, they have different types of flowers.
 *
 * Return any such a choice as an array answer, where answer[i] is the type of flower planted in
 * the (i+1)th garden. The flower types are denoted 1, 2, 3, or 4. It is guaranteed an answer
 * exists.
 */

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
  const graph = Array.from({ length: n }, () => new Set());
  const result = new Array(n).fill(0);

  for (const [x, y] of paths) {
    graph[x - 1].add(y - 1);
    graph[y - 1].add(x - 1);
  }

  for (let garden = 0; garden < n; garden++) {
    const usedColors = new Set();
    for (const neighbor of graph[garden]) {
      usedColors.add(result[neighbor]);
    }

    for (let color = 1; color <= 4; color++) {
      if (!usedColors.has(color)) {
        result[garden] = color;
        break;
      }
    }
  }

  return result;
};
