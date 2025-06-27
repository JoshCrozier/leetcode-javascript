/**
 * 1086. High Five
 * https://leetcode.com/problems/high-five/
 * Difficulty: Easy
 *
 * Given a list of the scores of different students, items, where items[i] = [IDi, scorei]
 * represents one score from a student with IDi, calculate each student's top five average.
 *
 * Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej]
 * represents the student with IDj and their top five average. Sort result by IDj in
 * increasing order.
 *
 * A student's top five average is calculated by taking the sum of their top five scores
 * and dividing it by 5 using integer division.
 */

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const studentScores = new Map();

  for (const [id, score] of items) {
    if (!studentScores.has(id)) {
      studentScores.set(id, []);
    }
    studentScores.get(id).push(score);
  }

  const result = [];
  for (const [id, scores] of studentScores) {
    scores.sort((a, b) => b - a);
    const topFiveSum = scores.slice(0, 5).reduce((sum, score) => sum + score, 0);
    const average = Math.floor(topFiveSum / 5);
    result.push([id, average]);
  }

  result.sort((a, b) => a[0] - b[0]);

  return result;
};
