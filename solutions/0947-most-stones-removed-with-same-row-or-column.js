/**
 * 947. Most Stones Removed with Same Row or Column
 * https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
 * Difficulty: Medium
 *
 * On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may
 * have at most one stone.
 *
 * A stone can be removed if it shares either the same row or the same column as another stone
 * that has not been removed.
 *
 * Given an array stones of length n where stones[i] = [xi, yi] represents the location of the
 * ith stone, return the largest possible number of stones that can be removed.
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const parent = new Map();
  const find = (stoneIndex) => {
    if (!parent.has(stoneIndex)) {
      parent.set(stoneIndex, stoneIndex);
    }
    if (parent.get(stoneIndex) !== stoneIndex) {
      parent.set(stoneIndex, find(parent.get(stoneIndex)));
    }
    return parent.get(stoneIndex);
  };

  const union = (stone1, stone2) => {
    parent.set(find(stone1), find(stone2));
  };

  const stoneMap = new Map();
  for (let i = 0; i < stones.length; i++) {
    const [row, col] = stones[i];
    const rowKey = `r${row}`;
    const colKey = `c${col}`;

    if (stoneMap.has(rowKey)) {
      union(i, stoneMap.get(rowKey));
    } else {
      stoneMap.set(rowKey, i);
    }

    if (stoneMap.has(colKey)) {
      union(i, stoneMap.get(colKey));
    } else {
      stoneMap.set(colKey, i);
    }
  }

  const uniqueGroups = new Set();
  for (let i = 0; i < stones.length; i++) {
    uniqueGroups.add(find(i));
  }

  return stones.length - uniqueGroups.size;
};
