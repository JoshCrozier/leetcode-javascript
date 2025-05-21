/**
 * 2383. Minimum Hours of Training to Win a Competition
 * https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/
 * Difficulty: Easy
 *
 * You are entering a competition, and are given two positive integers initialEnergy and
 * initialExperience denoting your initial energy and initial experience respectively.
 *
 * You are also given two 0-indexed integer arrays energy and experience, both of length n.
 *
 * You will face n opponents in order. The energy and experience of the ith opponent is
 * denoted by energy[i] and experience[i] respectively. When you face an opponent, you need
 * to have both strictly greater experience and energy to defeat them and move to the next
 * opponent if available.
 *
 * Defeating the ith opponent increases your experience by experience[i], but decreases your
 * energy by energy[i].
 *
 * Before starting the competition, you can train for some number of hours. After each hour
 * of training, you can either choose to increase your initial experience by one, or increase
 * your initial energy by one.
 *
 * Return the minimum number of training hours required to defeat all n opponents.
 */

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  let energyNeeded = 0;
  let experienceNeeded = 0;
  let currentEnergy = initialEnergy;
  let currentExperience = initialExperience;

  for (let i = 0; i < energy.length; i++) {
    if (currentEnergy <= energy[i]) {
      const deficit = energy[i] - currentEnergy + 1;
      energyNeeded += deficit;
      currentEnergy += deficit;
    }
    if (currentExperience <= experience[i]) {
      const deficit = experience[i] - currentExperience + 1;
      experienceNeeded += deficit;
      currentExperience += deficit;
    }
    currentEnergy -= energy[i];
    currentExperience += experience[i];
  }

  return energyNeeded + experienceNeeded;
};
