/**
 * 3186. Maximum Total Damage With Spell Casting
 * https://leetcode.com/problems/maximum-total-damage-with-spell-casting/
 * Difficulty: Medium
 *
 * A magician has various spells.
 *
 * You are given an array power, where each element represents the damage of a spell. Multiple
 * spells can have the same damage value.
 *
 * It is a known fact that if a magician decides to cast a spell with a damage of power[i],
 * they cannot cast any spell with a damage of power[i] - 2, power[i] - 1, power[i] + 1, or
 * power[i] + 2.
 *
 * Each spell can be cast only once.
 *
 * Return the maximum possible total damage that a magician can cast.
 */

/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
  const frequency = new Map();
  for (const p of power) {
    frequency.set(p, (frequency.get(p) || 0) + 1);
  }

  const uniquePowers = Array.from(frequency.keys()).sort((a, b) => a - b);
  const n = uniquePowers.length;

  if (n === 0) return 0;
  if (n === 1) return uniquePowers[0] * frequency.get(uniquePowers[0]);

  const dp = new Array(n).fill(0);
  dp[0] = uniquePowers[0] * frequency.get(uniquePowers[0]);

  for (let i = 1; i < n; i++) {
    const currentPower = uniquePowers[i];
    const currentDamage = currentPower * frequency.get(currentPower);

    let j = i - 1;
    while (j >= 0 && uniquePowers[j] >= currentPower - 2) {
      j--;
    }

    const withCurrent = currentDamage + (j >= 0 ? dp[j] : 0);
    const withoutCurrent = dp[i - 1];

    dp[i] = Math.max(withCurrent, withoutCurrent);
  }

  return dp[n - 1];
};
