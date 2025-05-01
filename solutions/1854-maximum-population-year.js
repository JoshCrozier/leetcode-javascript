/**
 * 1854. Maximum Population Year
 * https://leetcode.com/problems/maximum-population-year/
 * Difficulty: Easy
 *
 * You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the
 * birth and death years of the ith person.
 *
 * The population of some year x is the number of people alive during that year. The ith person
 * is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note
 * that the person is not counted in the year that they die.
 *
 * Return the earliest year with the maximum population.
 */

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  const populationChanges = new Array(101).fill(0);
  const baseYear = 1950;

  for (const [birth, death] of logs) {
    populationChanges[birth - baseYear]++;
    populationChanges[death - baseYear]--;
  }

  let maxPopulation = 0;
  let currentPopulation = 0;
  let result = baseYear;

  for (let i = 0; i < populationChanges.length; i++) {
    currentPopulation += populationChanges[i];
    if (currentPopulation > maxPopulation) {
      maxPopulation = currentPopulation;
      result = baseYear + i;
    }
  }

  return result;
};
