/**
 * 506. Relative Ranks
 * https://leetcode.com/problems/relative-ranks/
 * Difficulty: Easy
 *
 * You are given an integer array score of size n, where score[i] is the score of the ith
 * athlete in a competition. All the scores are guaranteed to be unique.
 *
 * The athletes are placed based on their scores, where the 1st place athlete has the highest
 * score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each
 * athlete determines their rank:
 * - The 1st place athlete's rank is "Gold Medal".
 * - The 2nd place athlete's rank is "Silver Medal".
 * - The 3rd place athlete's rank is "Bronze Medal".
 * - For the 4th place to the nth place athlete, their rank is their placement number
 *   (i.e., the xth place athlete's rank is "x").
 *
 * Return an array answer of size n where answer[i] is the rank of the ith athlete.
 */

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const PLACEMENTS = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  const map = new Map();
  score.forEach((rank, index) => map.set(rank, index));

  const result = score.slice();
  const sorted = [...map].sort(([a], [b]) => b - a);

  sorted.forEach(([_, index], rank) => {
    result[index] = PLACEMENTS[rank] || `${rank + 1}`;
  });

  return result;
};
