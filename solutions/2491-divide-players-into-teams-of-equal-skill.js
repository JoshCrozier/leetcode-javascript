/**
 * 2491. Divide Players Into Teams of Equal Skill
 * https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
 * Difficulty: Medium
 *
 * You are given a positive integer array skill of even length n where skill[i] denotes the
 * skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total
 * skill of each team is equal.
 *
 * The chemistry of a team is equal to the product of the skills of the players on that team.
 *
 * Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide
 * the players into teams such that the total skill of each team is equal.
 */

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  skill.sort((a, b) => a - b);
  const n = skill.length;
  const targetSum = skill[0] + skill[n - 1];
  let result = 0;

  for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (skill[i] + skill[j] !== targetSum) return -1;
    result += skill[i] * skill[j];
  }

  return result;
};
