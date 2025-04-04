/**
 * 1125. Smallest Sufficient Team
 * https://leetcode.com/problems/smallest-sufficient-team/
 * Difficulty: Hard
 *
 * In a project, you have a list of required skills reqSkills, and a list of people. The ith
 * person people[i] contains a list of skills that the person has.
 *
 * Consider a sufficient team: a set of people such that for every required skill in reqSkills,
 * there is at least one person in the team who has that skill. We can represent these teams by
 * the index of each person.
 *
 * For example, team = [0, 1, 3] represents the people with skills people[0], people[1], and
 * people[3].
 *
 * Return any sufficient team of the smallest possible size, represented by the index of each
 * person. You may return the answer in any order.
 *
 * It is guaranteed an answer exists.
 */

/**
 * @param {string[]} reqSkills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(reqSkills, people) {
  const skillCount = reqSkills.length;
  const skillMap = new Map(reqSkills.map((skill, index) => [skill, 1 << index]));
  const peopleSkills = people.map(skills =>
    skills.reduce((mask, skill) => mask | skillMap.get(skill), 0)
  );
  const target = (1 << skillCount) - 1;
  const dp = new Map([[0, []]]);

  for (let i = 0; i < people.length; i++) {
    const currentSkill = peopleSkills[i];
    for (const [prevMask, team] of dp) {
      const newMask = prevMask | currentSkill;
      if (!dp.has(newMask) || dp.get(newMask).length > team.length + 1) {
        dp.set(newMask, [...team, i]);
      }
    }
  }

  return dp.get(target);
};
