/**
 * 3494. Find the Minimum Amount of Time to Brew Potions
 * https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/
 * Difficulty: Medium
 *
 * You are given two integer arrays, skill and mana, of length n and m, respectively.
 *
 * In a laboratory, n wizards must brew m potions in order. Each potion has a mana capacity
 * mana[j] and must pass through all the wizards sequentially to be brewed properly. The
 * time taken by the ith wizard on the jth potion is timeij = skill[i] * mana[j].
 *
 * Since the brewing process is delicate, a potion must be passed to the next wizard
 * immediately after the current wizard completes their work. This means the timing must
 * be synchronized so that each wizard begins working on a potion exactly when it arrives.
 *
 * Return the minimum amount of time required for the potions to be brewed properly.
 */

/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
  const result = new Array(skill.length + 1).fill(0);

  for (let j = 0; j < mana.length; j++) {
    for (let i = 0; i < skill.length; i++) {
      result[i + 1] = Math.max(result[i + 1], result[i]) + mana[j] * skill[i];
    }
    for (let i = skill.length - 1; i > 0; i--) {
      result[i] = result[i + 1] - mana[j] * skill[i];
    }
  }

  return result[skill.length];
};
