/**
 * 1583. Count Unhappy Friends
 * https://leetcode.com/problems/count-unhappy-friends/
 * Difficulty: Medium
 *
 * You are given a list of preferences for n friends, where n is always even.
 *
 * For each person i, preferences[i] contains a list of friends sorted in the order of preference.
 * In other words, a friend earlier in the list is more preferred than a friend later in the list.
 * Friends in each list are denoted by integers from 0 to n-1.
 *
 * All the friends are divided into pairs. The pairings are given in a list pairs, where
 * pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.
 *
 * However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x
 * is paired with y and there exists a friend u who is paired with v but:
 * - x prefers u over y, and
 * - u prefers x over v.
 *
 * Return the number of unhappy friends.
 */

/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
  const rank = Array.from({ length: n }, () => new Array(n).fill(0));
  const pairMap = new Array(n).fill(0);
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      rank[i][preferences[i][j]] = j;
    }
  }

  for (const [x, y] of pairs) {
    pairMap[x] = y;
    pairMap[y] = x;
  }

  for (let x = 0; x < n; x++) {
    const y = pairMap[x];
    for (const u of preferences[x]) {
      if (u === y) break;
      const v = pairMap[u];
      if (rank[u][x] < rank[u][v]) {
        result++;
        break;
      }
    }
  }

  return result;
};
