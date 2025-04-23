/**
 * 1626. Best Team With No Conflicts
 * https://leetcode.com/problems/best-team-with-no-conflicts/
 * Difficulty: Medium
 *
 * You are the manager of a basketball team. For the upcoming tournament, you want to choose the
 * team with the highest overall score. The score of the team is the sum of scores of all the
 * players in the team.
 *
 * However, the basketball team is not allowed to have conflicts. A conflict exists if a younger
 * player has a strictly higher score than an older player. A conflict does not occur between
 * players of the same age.
 *
 * Given two lists, scores and ages, where each scores[i] and ages[i] represents the score and
 * age of the ith player, respectively, return the highest overall score of all possible basketball
 * teams.
 */

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  const players = ages.map((age, index) => ({ age, score: scores[index] }));
  players.sort((a, b) => a.age - b.age || a.score - b.score);

  const maxScores = new Array(players.length).fill(0);
  let highestScore = 0;

  for (let current = 0; current < players.length; current++) {
    maxScores[current] = players[current].score;
    for (let previous = 0; previous < current; previous++) {
      if (players[previous].score <= players[current].score) {
        maxScores[current] = Math.max(
          maxScores[current],
          maxScores[previous] + players[current].score
        );
      }
    }
    highestScore = Math.max(highestScore, maxScores[current]);
  }

  return highestScore;
};
