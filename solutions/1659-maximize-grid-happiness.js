/**
 * 1659. Maximize Grid Happiness
 * https://leetcode.com/problems/maximize-grid-happiness/
 * Difficulty: Hard
 *
 * You are given four integers, m, n, introvertsCount, and extrovertsCount. You have an m x n grid,
 * and there are two types of people: introverts and extroverts. There are introvertsCount
 * introverts and extrovertsCount extroverts.
 *
 * You should decide how many people you want to live in the grid and assign each of them one grid
 * cell. Note that you do not have to have all the people living in the grid.
 *
 * The happiness of each person is calculated as follows:
 * - Introverts start with 120 happiness and lose 30 happiness for each neighbor (introvert or
 *   extrovert).
 * - Extroverts start with 40 happiness and gain 20 happiness for each neighbor (introvert or
 *   extrovert).
 *
 * Neighbors live in the directly adjacent cells north, east, south, and west of a person's cell.
 *
 * The grid happiness is the sum of each person's happiness. Return the maximum possible grid
 * happiness.
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
var getMaxGridHappiness = function(m, n, introvertsCount, extrovertsCount) {
  const memo = new Map();
  const maxState = Math.pow(3, n);

  return calculateHappiness(0, 0, introvertsCount, extrovertsCount, 0);

  function calculateHappiness(row, col, introverts, extroverts, prevState) {
    if (row === m || (introverts === 0 && extroverts === 0)) return 0;
    if (col === n) return calculateHappiness(row + 1, 0, introverts, extroverts, prevState);

    const key = `${row},${col},${introverts},${extroverts},${prevState}`;
    if (memo.has(key)) return memo.get(key);

    const nextState = (prevState * 3) % maxState;
    let maxHappiness = calculateHappiness(row, col + 1, introverts, extroverts, nextState);

    if (introverts > 0) {
      let happiness = 120;
      const leftNeighbor = col > 0 ? prevState % 3 : 0;
      const upNeighbor = row > 0 ? Math.floor(prevState / Math.pow(3, n - 1)) % 3 : 0;

      if (leftNeighbor) happiness -= 30;
      if (upNeighbor) happiness -= 30;

      let neighborHappiness = 0;
      if (leftNeighbor === 1) neighborHappiness -= 30;
      if (leftNeighbor === 2) neighborHappiness += 20;
      if (upNeighbor === 1) neighborHappiness -= 30;
      if (upNeighbor === 2) neighborHappiness += 20;

      maxHappiness = Math.max(
        maxHappiness,
        happiness + neighborHappiness
        + calculateHappiness(row, col + 1, introverts - 1, extroverts, nextState + 1)
      );
    }

    if (extroverts > 0) {
      let happiness = 40;
      const leftNeighbor = col > 0 ? prevState % 3 : 0;
      const upNeighbor = row > 0 ? Math.floor(prevState / Math.pow(3, n - 1)) % 3 : 0;

      if (leftNeighbor) happiness += 20;
      if (upNeighbor) happiness += 20;

      let neighborHappiness = 0;
      if (leftNeighbor === 1) neighborHappiness -= 30;
      if (leftNeighbor === 2) neighborHappiness += 20;
      if (upNeighbor === 1) neighborHappiness -= 30;
      if (upNeighbor === 2) neighborHappiness += 20;

      maxHappiness = Math.max(
        maxHappiness,
        happiness + neighborHappiness
        + calculateHappiness(row, col + 1, introverts, extroverts - 1, nextState + 2)
      );
    }

    memo.set(key, maxHappiness);
    return maxHappiness;
  }
};
