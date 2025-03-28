/**
 * 957. Prison Cells After N Days
 * https://leetcode.com/problems/prison-cells-after-n-days/
 * Difficulty: Medium
 *
 * There are 8 prison cells in a row and each cell is either occupied or vacant.
 *
 * Each day, whether the cell is occupied or vacant changes according to the following rules:
 * - If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell
 *   becomes occupied.
 * - Otherwise, it becomes vacant.
 *
 * Note that because the prison is a row, the first and the last cells in the row can't have two
 * adjacent neighbors.
 *
 * You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and
 * cells[i] == 0 if the ith cell is vacant, and you are given an integer n.
 *
 * Return the state of the prison after n days (i.e., n such changes described above).
 */

/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
  const nextState = cells => [
    0,
    ...Array.from({ length: 6 }, (_, i) => cells[i] === cells[i + 2] ? 1 : 0),
    0
  ];

  let current = [...cells];
  const seen = new Map();
  let cycleLength = 0;

  while (n > 0) {
    const stateKey = current.join('');
    if (seen.has(stateKey)) {
      const cycleStart = seen.get(stateKey);
      cycleLength = cycleStart - n;
      n %= cycleLength;
    }
    seen.set(stateKey, n);
    if (n > 0) {
      current = nextState(current);
      n--;
    }
  }

  return current;
};
