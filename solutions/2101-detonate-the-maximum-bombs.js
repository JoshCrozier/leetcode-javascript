/**
 * 2101. Detonate the Maximum Bombs
 * https://leetcode.com/problems/detonate-the-maximum-bombs/
 * Difficulty: Medium
 *
 * You are given a list of bombs. The range of a bomb is defined as the area where its effect
 * can be felt. This area is in the shape of a circle with the center as the location of the bomb.
 *
 * The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri].
 * xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri
 * denotes the radius of its range.
 *
 * You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs
 * that lie in its range. These bombs will further detonate the bombs that lie in their ranges.
 *
 * Given the list of bombs, return the maximum number of bombs that can be detonated if you are
 * allowed to detonate only one bomb.
 */

/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  const n = bombs.length;
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    const [x1, y1, r1] = bombs[i];
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [x2, y2] = bombs[j];
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      if (distance <= r1) {
        graph[i].push(j);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dfs(i, new Set()));
  }

  return result;

  function dfs(node, visited) {
    visited.add(node);
    let count = 1;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        count += dfs(neighbor, visited);
      }
    }
    return count;
  }
};
