/**
 * 305. Number of Islands II
 * https://leetcode.com/problems/number-of-islands-ii/
 * Difficulty: Hard
 *
 * You are given an empty 2D binary grid grid of size m x n. The grid represents a map where 0's
 * represent water and 1's represent land. Initially, all the cells of grid are water cells
 * (i.e., all the cells are 0's).
 *
 * We may perform an add land operation which turns the water at position into a land. You are
 * given an array positions where positions[i] = [ri, ci] is the position (ri, ci) at which we
 * should operate the ith operation.
 *
 * Return an array of integers answer where answer[i] is the number of islands after turning
 * the cell (ri, ci) into a land.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally
 * or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  const parent = new Map();
  const rank = new Map();
  const result = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let islandCount = 0;

  for (const [row, col] of positions) {
    const current = row * n + col;
    if (parent.has(current)) {
      result.push(islandCount);
      continue;
    }
    islandCount++;
    parent.set(current, current);
    rank.set(current, 0);

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
        const neighbor = newRow * n + newCol;
        if (parent.has(neighbor)) {
          union(current, neighbor);
        }
      }
    }
    result.push(islandCount);
  }

  return result;

  function find(node) {
    if (!parent.has(node)) {
      parent.set(node, node);
      rank.set(node, 0);
    }
    if (parent.get(node) !== node) {
      parent.set(node, find(parent.get(node)));
    }
    return parent.get(node);
  }

  function union(node1, node2) {
    const root1 = find(node1);
    const root2 = find(node2);
    if (root1 === root2) return;
    const rank1 = rank.get(root1);
    const rank2 = rank.get(root2);
    if (rank1 < rank2) {
      parent.set(root1, root2);
    } else if (rank1 > rank2) {
      parent.set(root2, root1);
    } else {
      parent.set(root2, root1);
      rank.set(root1, rank1 + 1);
    }
    islandCount--;
  }
};
