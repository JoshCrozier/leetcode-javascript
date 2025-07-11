/**
 * 2403. Minimum Time to Kill All Monsters
 * https://leetcode.com/problems/minimum-time-to-kill-all-monsters/
 * Difficulty: Hard
 *
 * You are given an integer array power where power[i] is the power of the ith monster.
 *
 * You start with 0 mana points, and each day you increase your mana points by gain where gain
 * initially is equal to 1.
 *
 * Each day, after gaining gain mana, you can defeat a monster if your mana points are greater
 * than or equal to the power of that monster. When you defeat a monster:
 * - your mana points will be reset to 0, and
 * - the value of gain increases by 1.
 *
 * Return the minimum number of days needed to defeat all the monsters.
 */

/**
 * @param {number[]} power
 * @return {number}
 */
var minimumTime = function(power) {
  const n = power.length;
  const map = new Map();

  return dp(0, 1);

  function dp(mask, gain) {
    if (mask === (1 << n) - 1) return 0;

    const key = `${mask}_${gain}`;
    if (map.has(key)) return map.get(key);

    let minDays = Infinity;

    for (let i = 0; i < n; i++) {
      if (!(mask & (1 << i))) {
        const daysNeeded = Math.ceil(power[i] / gain);
        const totalDays = daysNeeded + dp(mask | (1 << i), gain + 1);
        minDays = Math.min(minDays, totalDays);
      }
    }

    map.set(key, minDays);
    return minDays;
  }
};
