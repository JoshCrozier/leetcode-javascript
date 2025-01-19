/**
 * 407. Trapping Rain Water II
 * https://leetcode.com/problems/trapping-rain-water-ii/
 * Difficulty: Hard
 *
 * Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D
 * elevation map, return the volume of water it can trap after raining.
 */

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  const minHeap = new MinPriorityQueue({ priority: ([value]) => value });
  const history = new Array(heightMap.length).fill(0)
    .map(() => new Array(heightMap[0].length).fill(false));

  for (let i = 0; i < heightMap.length; i++) {
    for (let j = 0; j < heightMap[0].length; j++) {
      if (i === 0 || i === heightMap.length - 1 || j === 0 || j === heightMap[0].length - 1) {
        minHeap.enqueue([heightMap[i][j], i, j]);
        history[i][j] = true;
      }
    }
  }

  let result = 0;
  while (minHeap.size()) {
    const [weight, i, j] = minHeap.dequeue().element;
    [[0, 1], [1, 0], [0, -1], [-1, 0]].forEach(([x, y]) => {
      const [rowIndex, columnIndex] = [i + x, j + y];
      if (rowIndex >= 0 && rowIndex < heightMap.length && columnIndex >= 0
          && columnIndex < heightMap[0].length && !history[rowIndex][columnIndex]) {
        result += Math.max(0, weight - heightMap[rowIndex][columnIndex]);
        minHeap.enqueue([
          Math.max(weight, heightMap[rowIndex][columnIndex]), rowIndex, columnIndex
        ]);
        history[rowIndex][columnIndex] = true;
      }
    });
  }

  return result;
};
