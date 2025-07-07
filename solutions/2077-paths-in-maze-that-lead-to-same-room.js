/**
 * 2077. Paths in Maze That Lead to Same Room
 * https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/
 * Difficulty: Medium
 *
 * A maze consists of n rooms numbered from 1 to n, and some rooms are connected by corridors.
 * You are given a 2D integer array corridors where corridors[i] = [room1i, room2i] indicates
 * that there is a corridor connecting room1i and room2i, allowing a person in the maze to go
 * from room1i to room2i and vice versa.
 *
 * The designer of the maze wants to know how confusing the maze is. The confusion score of
 * the maze is the number of different cycles of length 3.
 * - For example, 1 → 2 → 3 → 1 is a cycle of length 3, but 1 → 2 → 3 → 4 and
 *   1 → 2 → 3 → 2 → 1 are not.
 *
 * Two cycles are considered to be different if one or more of the rooms visited in the first
 * cycle is not in the second cycle.
 *
 * Return the confusion score of the maze.
 */

/**
 * @param {number} n
 * @param {number[][]} corridors
 * @return {number}
 */
var numberOfPaths = function(n, corridors) {
  const graph = Array.from({ length: n + 1 }, () => new Set());

  for (const [room1, room2] of corridors) {
    graph[room1].add(room2);
    graph[room2].add(room1);
  }

  let cycles = 0;

  for (let i = 1; i <= n; i++) {
    const neighbors = Array.from(graph[i]);

    for (let j = 0; j < neighbors.length; j++) {
      for (let k = j + 1; k < neighbors.length; k++) {
        const neighbor1 = neighbors[j];
        const neighbor2 = neighbors[k];

        if (neighbor1 > i && neighbor2 > i && graph[neighbor1].has(neighbor2)) {
          cycles++;
        }
      }
    }
  }

  return cycles;
};
