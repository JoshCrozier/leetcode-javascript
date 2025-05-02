/**
 * 1900. The Earliest and Latest Rounds Where Players Compete
 * https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/
 * Difficulty: Hard
 *
 * There is a tournament where n players are participating. The players are standing in a single row
 * and are numbered from 1 to n based on their initial standing position (player 1 is the first
 * player in the row, player 2 is the second player in the row, etc.).
 *
 * The tournament consists of multiple rounds (starting from round number 1). In each round, the ith
 * player from the front of the row competes against the ith player from the end of the row, and the
 * winner advances to the next round. When the number of players is odd for the current round, the
 * player in the middle automatically advances to the next round.
 * - For example, if the row consists of players 1, 2, 4, 6, 7
 *   - Player 1 competes against player 7.
 *   - Player 2 competes against player 6.
 *   - Player 4 automatically advances to the next round.
 *
 * After each round is over, the winners are lined back up in the row based on the original ordering
 * assigned to them initially (ascending order).
 *
 * The players numbered firstPlayer and secondPlayer are the best in the tournament. They can win
 * against any other player before they compete against each other. If any two other players compete
 * against each other, either of them might win, and thus you may choose the outcome of this round.
 *
 * Given the integers n, firstPlayer, and secondPlayer, return an integer array containing two
 * values, the earliest possible round number and the latest possible round number in which these
 * two players will compete against each other, respectively.
 */

/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function(numPlayers, firstPlayer, secondPlayer) {
  let minRounds = Infinity;
  let maxRounds = 0;

  dfs(0, 1);

  return [minRounds, maxRounds];

  function dfs(playersEliminated, numRounds) {
    let roundResults = [playersEliminated];
    let i = 1;
    let j = numPlayers;

    while (true) {
      while (playersEliminated & (1 << i)) i++;
      while (playersEliminated & (1 << j)) j--;

      if (i >= j) break;

      if (i === firstPlayer && j === secondPlayer) {
        minRounds = Math.min(minRounds, numRounds);
        maxRounds = Math.max(maxRounds, numRounds);
        return;
      }

      const newRoundResults = [];

      if (j !== firstPlayer && j !== secondPlayer) {
        for (const roundResult of roundResults) {
          newRoundResults.push(roundResult | (1 << j));
        }
      }

      if (i !== firstPlayer && i !== secondPlayer) {
        for (const roundResult of roundResults) {
          newRoundResults.push(roundResult | (1 << i));
        }
      }

      i++;
      j--;
      roundResults = newRoundResults;
    }

    if (!roundResults.length) return;

    numRounds++;
    roundResults.forEach(roundResult => dfs(roundResult, numRounds));
  }
};
