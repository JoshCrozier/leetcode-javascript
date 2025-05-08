/**
 * 3342. Find Minimum Time to Reach Last Room II
 * https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/
 * Difficulty: Medium
 *
 * There is a dungeon with n x m rooms arranged as a grid.
 *
 * You are given a 2D array moveTime of size n x m, where moveTime[i][j] represents the minimum
 * time in seconds when you can start moving to that room. You start from the room (0, 0) at
 * time t = 0 and can move to an adjacent room. Moving between adjacent rooms takes one
 * second for one move and two seconds for the next, alternating between the two.
 *
 * Return the minimum time to reach the room (n - 1, m - 1).
 *
 * Two rooms are adjacent if they share a common wall, either horizontally or vertically.
 */

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
  const rows = moveTime.length;
  const cols = moveTime[0].length;
  const distances = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
  const pq = new PriorityQueue((a, b) => a[0] - b[0]);
  pq.enqueue([0, 0, 0, 0]);
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  distances[0][0] = 0;

  while (!pq.isEmpty()) {
    const [time, row, col, moveCount] = pq.dequeue();

    if (row === rows - 1 && col === cols - 1) return time;

    if (time > distances[row][col]) continue;

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;

      const moveCost = moveCount % 2 === 0 ? 1 : 2;
      const startTime = Math.max(time, moveTime[newRow][newCol]);
      const newTime = startTime + moveCost;

      if (newTime < distances[newRow][newCol]) {
        distances[newRow][newCol] = newTime;
        pq.enqueue([newTime, newRow, newCol, moveCount + 1]);
      }
    }
  }

  return distances[rows - 1][cols - 1];
};
