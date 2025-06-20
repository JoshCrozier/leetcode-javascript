/**
 * 544. Output Contest Matches
 * https://leetcode.com/problems/output-contest-matches/
 * Difficulty: Medium
 *
 * During the NBA playoffs, we always set the rather strong team to play with the rather weak
 * team, like making the rank 1 team play with the rank nth team, which is a good strategy to
 * make the contest more interesting.
 *
 * Given n teams, return their final contest matches in the form of a string.
 *
 * The n teams are labeled from 1 to n, which represents their initial rank (i.e., Rank 1 is
 * the strongest team and Rank n is the weakest team).
 *
 * We will use parentheses '(', and ')' and commas ',' to represent the contest team pairing.
 * We use the parentheses for pairing and the commas for partition. During the pairing process
 * in each round, you always need to follow the strategy of making the rather strong one pair
 * with the rather weak one.
 */

/**
 * @param {number} n
 * @return {string}
 */
var findContestMatch = function(n) {
  const teams = Array.from({ length: n }, (_, i) => (i + 1).toString());
  return pairTeams(teams);

  function pairTeams(arr) {
    if (arr.length === 1) return arr[0];

    const nextRound = [];
    for (let i = 0; i < arr.length / 2; i++) {
      nextRound.push(`(${arr[i]},${arr[arr.length - 1 - i]})`);
    }

    return pairTeams(nextRound);
  }
};
