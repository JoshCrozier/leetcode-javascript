/**
 * 2838. Maximum Coins Heroes Can Collect
 * https://leetcode.com/problems/maximum-coins-heroes-can-collect/
 * Difficulty: Medium
 *
 * There is a battle and n heroes are trying to defeat m monsters. You are given two 1-indexed
 * arrays of positive integers heroes and monsters of length n and m, respectively. heroes[i]
 * is the power of ith hero, and monsters[i] is the power of ith monster.
 *
 * The ith hero can defeat the jth monster if monsters[j] <= heroes[i].
 *
 * You are also given a 1-indexed array coins of length m consisting of positive integers.
 * coins[i] is the number of coins that each hero earns after defeating the ith monster.
 *
 * Return an array ans of length n where ans[i] is the maximum number of coins that the ith
 * hero can collect from this battle.
 *
 * Notes
 * - The health of a hero doesn't get reduced after defeating a monster.
 * - Multiple heroes can defeat a monster, but each monster can be defeated by a given hero
 *   only once.
 */

/**
 * @param {number[]} heroes
 * @param {number[]} monsters
 * @param {number[]} coins
 * @return {number[]}
 */
var maximumCoins = function(heroes, monsters, coins) {
  const monsterCoinPairs = monsters.map((monster, i) => [monster, coins[i]]);
  monsterCoinPairs.sort((a, b) => a[0] - b[0]);
  const sortedMonsters = monsterCoinPairs.map(pair => pair[0]);
  const sortedCoins = monsterCoinPairs.map(pair => pair[1]);

  const prefixSum = [0];
  for (let i = 0; i < sortedCoins.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + sortedCoins[i];
  }

  const result = [];
  for (const heroPower of heroes) {
    const defeatedCount = bisectRight(sortedMonsters, heroPower);
    result.push(prefixSum[defeatedCount]);
  }

  return result;

  function bisectRight(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
};
