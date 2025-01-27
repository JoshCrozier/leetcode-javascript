/**
 * 1366. Rank Teams by Votes
 * https://leetcode.com/problems/rank-teams-by-votes/
 * Difficulty: Medium
 *
 * In a special ranking system, each voter gives a rank from highest to lowest to all
 * teams participating in the competition.
 *
 * The ordering of teams is decided by who received the most position-one votes. If two
 * or more teams tie in the first position, we consider the second position to resolve
 * the conflict, if they tie again, we continue this process until the ties are resolved.
 * If two or more teams are still tied after considering all positions, we rank them
 * alphabetically based on their team letter.
 *
 * You are given an array of strings votes which is the votes of all voters in the ranking
 * systems. Sort all teams according to the ranking system described above.
 *
 * Return a string of all teams sorted by the ranking system.
 */

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  if (votes.length === 1) {
    return votes[0];
  }

  const map = new Map(votes[0].split('').map(s => {
    return [s, new Array(votes[0].length).fill(0)];
  }));

  for (vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      map.get(vote[i])[i]++;
    }
  }

  const result = votes[0].split('').sort((a, b) => {
    for (let i = 0; i < votes[0].length; i++) {
      if (map.get(a)[i] > map.get(b)[i]) return -1;
      if (map.get(a)[i] < map.get(b)[i]) return 1;
    }
    return a < b ? -1 : 1;
  });

  return result.join('');
};
