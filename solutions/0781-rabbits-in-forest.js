/**
 * 781. Rabbits in Forest
 * https://leetcode.com/problems/rabbits-in-forest/
 * Difficulty: Medium
 *
 * There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have
 * the same color as you?" and collected the answers in an integer array answers where answers[i]
 * is the answer of the ith rabbit.
 *
 * Given the array answers, return the minimum number of rabbits that could be in the forest.
 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const colorGroups = {};
  let totalRabbits = 0;

  for (const answer of answers) {
    if (answer === 0) {
      totalRabbits++;
      continue;
    }

    if (!colorGroups[answer] || colorGroups[answer] === 0) {
      totalRabbits += answer + 1;
      colorGroups[answer] = answer;
    } else {
      colorGroups[answer]--;
    }
  }

  return totalRabbits;
};
