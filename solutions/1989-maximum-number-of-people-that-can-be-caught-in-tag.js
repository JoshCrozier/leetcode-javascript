/**
 * 1989. Maximum Number of People That Can Be Caught in Tag
 * https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/
 * Difficulty: Medium
 *
 * You are playing a game of tag with your friends. In tag, people are divided into two
 * teams: people who are "it", and people who are not "it". The people who are "it" want
 * to catch as many people as possible who are not "it".
 *
 * You are given a 0-indexed integer array team containing only zeros (denoting people who
 * are not "it") and ones (denoting people who are "it"), and an integer dist. A person who
 * is "it" at index i can catch any one person whose index is in the range [i - dist, i + dist]
 * (inclusive) and is not "it".
 *
 * Return the maximum number of people that the people who are "it" can catch.
 */

/**
 * @param {number[]} team
 * @param {number} dist
 * @return {number}
 */
var catchMaximumAmountofPeople = function(team, dist) {
  const catchers = [];
  const targets = [];

  for (let i = 0; i < team.length; i++) {
    if (team[i] === 1) {
      catchers.push(i);
    } else {
      targets.push(i);
    }
  }

  let result = 0;
  let targetIndex = 0;
  for (const catcherPos of catchers) {
    while (targetIndex < targets.length && targets[targetIndex] < catcherPos - dist) {
      targetIndex++;
    }

    if (targetIndex < targets.length && targets[targetIndex] <= catcherPos + dist) {
      result++;
      targetIndex++;
    }
  }

  return result;
};
