/**
 * 3385. Minimum Time to Break Locks II
 * https://leetcode.com/problems/minimum-time-to-break-locks-ii/
 * Difficulty: Hard
 *
 * Bob is stuck in a dungeon and must break n locks, each requiring some amount of energy
 * to break. The required energy for each lock is stored in an array called strength where
 * strength[i] indicates the energy needed to break the ith lock.
 *
 * To break a lock, Bob uses a sword with the following characteristics:
 * - The initial energy of the sword is 0.
 * - The initial factor X by which the energy of the sword increases is 1.
 * - Every minute, the energy of the sword increases by the current factor X.
 * - To break the ith lock, the energy of the sword must reach at least strength[i].
 * - After breaking a lock, the energy of the sword resets to 0, and the factor X increases by 1.
 *
 * Your task is to determine the minimum time in minutes required for Bob to break all n locks
 * and escape the dungeon.
 *
 * Return the minimum time required for Bob to break all n locks.
 */

/**
 * @param {number[]} strength
 * @return {number}
 */
var findMinimumTime = function(strength) {
  const n = strength.length;
  const cost = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cost[i + 1][j + 1] = Math.floor((strength[i] + j) / (j + 1));
    }
  }

  const rowPotential = new Array(n + 1).fill(0);
  const colPotential = new Array(n + 1).fill(0);
  const assignment = new Array(n + 1).fill(0);
  const parent = new Array(n + 1).fill(0);

  for (let row = 1; row <= n; row++) {
    assignment[0] = row;
    let col = 0;
    const minCol = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    const visited = new Array(n + 1).fill(false);

    do {
      visited[col] = true;
      const currentRow = assignment[col];
      let delta = Number.MAX_SAFE_INTEGER;
      let nextCol;

      for (let j = 1; j <= n; j++) {
        if (!visited[j]) {
          const reducedCost = cost[currentRow][j] - rowPotential[currentRow] - colPotential[j];
          if (reducedCost < minCol[j]) {
            minCol[j] = reducedCost;
            parent[j] = col;
          }
          if (minCol[j] < delta) {
            delta = minCol[j];
            nextCol = j;
          }
        }
      }

      for (let j = 0; j <= n; j++) {
        if (visited[j]) {
          rowPotential[assignment[j]] += delta;
          colPotential[j] -= delta;
        } else {
          minCol[j] -= delta;
        }
      }

      col = nextCol;
    } while (assignment[col] !== 0);

    do {
      const prevCol = parent[col];
      assignment[col] = assignment[prevCol];
      col = prevCol;
    } while (col);
  }

  return -colPotential[0];
};
