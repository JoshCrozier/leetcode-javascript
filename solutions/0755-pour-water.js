/**
 * 755. Pour Water
 * https://leetcode.com/problems/pour-water/
 * Difficulty: Medium
 *
 * You are given an elevation map represents as an integer array heights where heights[i]
 * representing the height of the terrain at index i. The width at each index is 1. You
 * are also given two integers volume and k. volume units of water will fall at index k.
 *
 * Water first drops at the index k and rests on top of the highest terrain or water at
 * that index. Then, it flows according to the following rules:
 * - If the droplet would eventually fall by moving left, then move left.
 * - Otherwise, if the droplet would eventually fall by moving right, then move right.
 * - Otherwise, rise to its current position.
 *
 * Here, "eventually fall" means that the droplet will eventually be at a lower level if
 * it moves in that direction. Also, level means the height of the terrain plus any water
 * in that column.
 *
 * We can assume there is infinitely high terrain on the two sides out of bounds of the
 * array. Also, there could not be partial water being spread out evenly on more than one
 * grid block, and each unit of water has to be in exactly one block.
 */

/**
 * @param {number[]} heights
 * @param {number} volume
 * @param {number} k
 * @return {number[]}
 */
var pourWater = function(heights, volume, k) {
  const water = new Array(heights.length).fill(0);

  for (let drop = 0; drop < volume; drop++) {
    if (canFallLeft(k)) {
      water[findLeftPosition(k)]++;
    } else if (canFallRight(k)) {
      water[findRightPosition(k)]++;
    } else {
      water[k]++;
    }
  }

  return heights.map((h, i) => h + water[i]);

  function canFallLeft(index) {
    let currentLevel = heights[index] + water[index];
    for (let i = index - 1; i >= 0; i--) {
      const level = heights[i] + water[i];
      if (level < currentLevel) return true;
      if (level > currentLevel) return false;
      currentLevel = level;
    }
    return false;
  }

  function canFallRight(index) {
    let currentLevel = heights[index] + water[index];
    for (let i = index + 1; i < heights.length; i++) {
      const level = heights[i] + water[i];
      if (level < currentLevel) return true;
      if (level > currentLevel) return false;
      currentLevel = level;
    }
    return false;
  }

  function findLeftPosition(index) {
    let minHeight = heights[index] + water[index];
    let position = index;
    for (let i = index - 1; i >= 0; i--) {
      const level = heights[i] + water[i];
      if (level > minHeight) break;
      if (level < minHeight) {
        minHeight = level;
        position = i;
      }
    }
    return position;
  }

  function findRightPosition(index) {
    let minHeight = heights[index] + water[index];
    let position = index;
    for (let i = index + 1; i < heights.length; i++) {
      const level = heights[i] + water[i];
      if (level > minHeight) break;
      if (level < minHeight) {
        minHeight = level;
        position = i;
      }
    }
    return position;
  }
};
