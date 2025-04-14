/**
 * 1434. Number of Ways to Wear Different Hats to Each Other
 * https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/
 * Difficulty: Hard
 *
 * There are n people and 40 types of hats labeled from 1 to 40.
 *
 * Given a 2D integer array hats, where hats[i] is a list of all hats preferred by the ith person.
 *
 * Return the number of ways that n people can wear different hats from each other.
 *
 * Since the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
  const MOD = 1e9 + 7;
  const hatToPeople = Array(41).fill().map(() => []);
  const cache = new Map();

  for (let person = 0; person < hats.length; person++) {
    for (const hat of hats[person]) {
      hatToPeople[hat].push(person);
    }
  }

  function assignHats(hat, usedMask) {
    if (hat > 40) {
      return usedMask === (1 << hats.length) - 1 ? 1 : 0;
    }

    const key = `${hat}:${usedMask}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    let ways = assignHats(hat + 1, usedMask);

    for (const person of hatToPeople[hat]) {
      if (!(usedMask & (1 << person))) {
        ways = (ways + assignHats(hat + 1, usedMask | (1 << person))) % MOD;
      }
    }

    cache.set(key, ways);
    return ways;
  }

  return assignHats(1, 0);
};
